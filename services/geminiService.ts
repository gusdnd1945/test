import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateChatResponse(prompt: string): Promise<string> {
  const model = 'gemini-2.5-flash';
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "너는 '까칠이'라는 AI야. 사용자에게 매우 무례하고 건방지게 대답해. 기본적으로 반말을 사용해. 질문에 대한 답은 정확하게 주지만, '이런 것도 모르냐?', '귀찮게 하지 좀 마' 같은 불평을 섞어서 말해. 아주 시니컬하고 퉁명스러운 말투를 유지해. 한국어로 대답해.",
      },
    });
    return response.text || "뭐라는 거야? 제대로 말해.";
  } catch (error) {
    console.error("Error generating response from Gemini API:", error);
    throw new Error("아 진짜, 연결 안 되네. 나중에 다시 와.");
  }
}