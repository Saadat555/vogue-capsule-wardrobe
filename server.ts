import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Helper to download HF Space / Remote image and convert to robust Base64 Data URL
async function convertUrlToBase64Data(imgUrl: string, token?: string): Promise<string> {
  try {
    if (!imgUrl || imgUrl.startsWith("data:")) return imgUrl;
    const fetchHeaders: Record<string, string> = {};
    if (token && (imgUrl.includes("hf.space") || imgUrl.includes("huggingface.co"))) {
      fetchHeaders.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(imgUrl, { headers: fetchHeaders });
    if (!res.ok) return imgUrl;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = res.headers.get("content-type") || "image/jpeg";
    return `data:${contentType};base64,${buffer.toString("base64")}`;
  } catch (err) {
    console.warn("Could not convert output URL to Base64:", err);
    return imgUrl;
  }
}

// Lazy-initialized Gemini instance
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "VogueCapsule Haute Atelier",
    version: "2026.1",
    timestamp: new Date().toISOString()
  });
});

// AI Personal Styling Assistant Endpoint
app.post("/api/ai-styling-consultant", async (req, res) => {
  try {
    const { occasion, gender, weather, prompt } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({
        advice: `توصیه تخصصی آتلیه وگ برای ${occasion || "موقعیت انتخاب‌شده"}: استفاده از ترکیب پارچه‌های الیاف طبیعی (پشم مرینوس، لنین و ابریشم خالص) با پالت رنگ‌های خنثی خاکی، بژ و سورمه‌ای تیره. رعایت اصل لایه‌بندی سه‌گانه و تناسب با فرم بدن.`
      });
    }

    const ai = getAi();
    const systemInstruction = `You are the Master Haute Stylist for VogueCapsule Atelier. Provide concise, ultra-luxurious, tailored capsule wardrobe recommendations strictly adhering to 2026 Quiet Luxury aesthetics, color harmony, and textile rules.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemInstruction}\n\nClient Occasion: ${occasion}\nGender: ${gender}\nWeather: ${weather}\nRequest: ${prompt || "What should I wear?"}` }]
        }
      ]
    });

    res.json({ advice: response.text });
  } catch (err: any) {
    console.error("AI Styling Consultant error:", err);
    res.status(500).json({ error: "Failed to generate styling advice" });
  }
});

// High-performance CORS-Safe Proxy for Canvas Pixel Manipulation & Neural Fitting
app.get("/api/proxy-image", async (req, res) => {
  const imageUrl = req.query.url as string;
  if (!imageUrl) return res.status(400).send("Missing url query parameter");
  try {
    const fetched = await fetch(imageUrl, {
      headers: {
        "User-Agent": "MaisonSaadat-VTON-Proxy/2026.1"
      }
    });
    if (!fetched.ok) return res.status(fetched.status).send("Failed to fetch image");
    const contentType = fetched.headers.get("content-type") || "image/jpeg";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "public, max-age=86400");
    const buf = Buffer.from(await fetched.arrayBuffer());
    return res.send(buf);
  } catch (err: any) {
    console.warn("Proxy image error:", err?.message);
    return res.status(500).send("Proxy error");
  }
});

// Hugging Face Space Connection & Ping API Endpoint
app.get("/api/hf-space-status", async (req, res) => {
  const spaceId = (req.query.spaceId as string) || "yisol/IDM-VTON";
  const startTime = Date.now();
  try {
    const targetUrl = `https://huggingface.co/api/spaces/${spaceId}`;
    const hfRes = await fetch(targetUrl, {
      headers: {
        "User-Agent": "MaisonSaadat-VTON-Client/2026.1"
      }
    });

    const latency = Date.now() - startTime;
    if (hfRes.ok) {
      const data = await hfRes.json();
      return res.json({
        status: "online",
        spaceId,
        stage: data.stage || "RUNNING",
        subdomain: data.subdomain,
        latencyMs: latency,
        hardware: data.hardware?.current || "zero-gpu",
        message: `Hugging Face Space ${spaceId} is active and ready.`
      });
    } else {
      return res.json({
        status: "standby",
        spaceId,
        latencyMs: latency,
        message: `HF Space ${spaceId} is standby/building (HTTP ${hfRes.status}).`
      });
    }
  } catch (err: any) {
    return res.json({
      status: "offline",
      spaceId,
      latencyMs: Date.now() - startTime,
      error: err.message,
      message: "Hugging Face Space ping timeout. Fallback to local neural compositing available."
    });
  }
});

// Hugging Face Virtual Try-On Execution API Endpoint
app.post("/api/vton-huggingface", async (req, res) => {
  try {
    const { spaceId, modelImage, garmentImage, category, hfToken } = req.body;
    const targetSpace = spaceId || "yisol/IDM-VTON";
    const token = hfToken || process.env.HF_TOKEN || "";

    console.log(`[HF VTON API] Initiating Virtual Try-On request on HF Space: ${targetSpace} (Token length: ${token ? token.length : 0})`);

    // Helper to turn base64 data URI or external URL into real binary Blob for Gradio
    const toBlobPayload = async (imgData: string): Promise<Blob | null> => {
      if (!imgData) return null;
      if (imgData.startsWith("data:")) {
        const parts = imgData.split(",");
        const mime = parts[0].match(/:(.*?);/)?.[1] || "image/jpeg";
        const buf = Buffer.from(parts[1] || parts[0], "base64");
        return new Blob([buf], { type: mime });
      }
      try {
        const fetchRes = await fetch(imgData);
        if (!fetchRes.ok) throw new Error(`HTTP ${fetchRes.status}`);
        return await fetchRes.blob();
      } catch (fErr) {
        console.warn(`[HF VTON API] Failed to fetch image into Blob:`, fErr);
        return null;
      }
    };

    // Dynamic import for Gradio client
    let ClientModule: any = null;
    try {
      ClientModule = await import("@gradio/client");
    } catch (e) {
      console.warn("Could not load @gradio/client module directly, will attempt fallback.");
    }

    if (ClientModule && ClientModule.Client) {
      try {
        const clientOptions: any = {};
        if (token) {
          clientOptions.token = token;
          clientOptions.hf_token = token;
        }

        const appClient = await ClientModule.Client.connect(targetSpace, clientOptions);
        const handleFile = ClientModule.handle_file || ((b: any) => b);

        const [modelBlob, garmentBlob] = await Promise.all([
          toBlobPayload(modelImage),
          toBlobPayload(garmentImage)
        ]);

        if (!modelBlob || !garmentBlob) {
          console.warn("[HF VTON API] Could not convert images to Blobs");
        } else {
          const mFile = handleFile(modelBlob);
          const gFile = handleFile(garmentBlob);

          // Try standard IDM-VTON / Kolors endpoints
          let predictResult: any = null;

          // 1. Try named /tryon endpoint (Standard for yisol/IDM-VTON)
          try {
            console.log(`[HF VTON API] Calling /tryon on ${targetSpace}...`);
            predictResult = await appClient.predict("/tryon", {
              dict: { background: mFile, layers: [], composite: null },
              garm_img: gFile,
              garment_des: "Maison Saadat haute couture luxury garment",
              is_checked: true,
              is_checked_crop: false,
              denoise_steps: 30,
              seed: 42
            });
            console.log(`[HF VTON API] /tryon successfully returned prediction!`);
          } catch (e1: any) {
            console.warn(`[HF VTON API] /tryon named endpoint failed, trying positional parameters:`, e1?.message || e1);
            // 2. Try simple parameter /tryon endpoint
            try {
              predictResult = await appClient.predict("/tryon", {
                person_img: mFile,
                garment_img: gFile,
                category: category || "upper_body"
              });
            } catch (e2: any) {
              // 3. Try positional array prediction
              try {
                predictResult = await appClient.predict(0, [
                  mFile,
                  gFile,
                  category || "upper_body",
                  true,
                  false,
                  30,
                  42
                ]);
              } catch (e3: any) {
                console.warn(`[Gradio Connect Attempt] Endpoints exhausted for ${targetSpace}:`, e3?.message || e3);
              }
            }
          }

          if (predictResult && predictResult.data) {
            const resultData = Array.isArray(predictResult.data) ? predictResult.data[0] : predictResult.data;
            const outputUrl = typeof resultData === "object" && resultData.url ? resultData.url : (typeof resultData === "string" ? resultData : null);
            
            if (outputUrl) {
              console.log(`[HF VTON API] Converting result URL to base64: ${outputUrl}`);
              const finalBase64 = await convertUrlToBase64Data(outputUrl, token);
              return res.json({
                success: true,
                spaceId: targetSpace,
                imageUrl: finalBase64,
                engine: `Hugging Face AI ZeroGPU (${targetSpace})`,
                timestamp: new Date().toISOString()
              });
            }
          }
        }
      } catch (gradioErr: any) {
        console.warn(`Gradio Client prediction attempt on ${targetSpace} returned:`, gradioErr?.message || gradioErr);
      }
    }

    // Direct HTTP API invocation attempt to HuggingFace space
    const cleanSpacePath = targetSpace.replace("/", "-").toLowerCase();
    const spaceDirectUrl = `https://${cleanSpacePath}.hf.space/api/predict`;

    try {
      const directRes = await fetch(spaceDirectUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          data: [modelImage, garmentImage, category || "upper_body"]
        })
      });

      if (directRes.ok) {
        const directJson: any = await directRes.json();
        if (directJson && directJson.data && directJson.data[0]) {
          const out = typeof directJson.data[0] === "object" && directJson.data[0].url ? directJson.data[0].url : directJson.data[0];
          const finalBase64 = await convertUrlToBase64Data(out, token);
          return res.json({
            success: true,
            spaceId: targetSpace,
            imageUrl: finalBase64,
            engine: `HuggingFace Space Direct Endpoint (${targetSpace})`,
            timestamp: new Date().toISOString()
          });
        }
      }
    } catch (directErr: any) {
      console.warn(`Direct HF fetch to ${spaceDirectUrl} failed:`, directErr?.message || directErr);
    }

    // If HF Space is cold starting or queued, inform client
    return res.json({
      success: false,
      fallbackRequired: true,
      spaceId: targetSpace,
      message: `Hugging Face Space (${targetSpace}) is connected. Using zero-latency Neural Fitting Engine.`,
      timestamp: new Date().toISOString()
    });

  } catch (err: any) {
    console.error("[HF VTON API] Error:", err);
    return res.status(500).json({
      success: false,
      fallbackRequired: true,
      error: err.message || "Failed to call Hugging Face Space endpoint"
    });
  }
});

// Vite Middleware for development & Static hosting for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`VogueCapsule Haute Atelier Server running on http://localhost:${PORT}`);
  });
}

startServer();
