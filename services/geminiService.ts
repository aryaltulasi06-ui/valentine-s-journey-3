import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateValentineLetter = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Write a short, wholesome, witty, and very romantic Valentine's Day note. It should be informal, lowercase aesthetic, roughly 50-70 words. Theme: 'I'm so lucky to have you'.",
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });
    
    return response.text || "You are the best thing that ever happened to me. Happy Valentine's Day! ❤️";
  } catch (error) {
    console.error("Error generating text:", error);
    return "Roses are red, violets are blue, this AI failed, but I still love you! ❤️";
  }
};
