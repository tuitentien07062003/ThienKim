import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "./promt";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const generateChatReply = async (message, chatHistory, lang) => {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT(lang),
    });

    let formattedHistory = chatHistory.map(msg => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    if (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory.shift(); 
    }

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: { maxOutputTokens: 1024, temperature: 0.5 },
    });

  //  const result = await chat.sendMessage(message);
  //  const response = await result.response;
  //  return response.text();
//
  //} catch (error) {
  //  console.error("Chat Error:", error);
  //  return lang === 'vi' 
  //    ? "Xin lỗi, hiện tại mình đang bận. Vui lòng thử lại sau!" 
  //    : "Sorry, I'm a bit busy right now. Please try again later!";
  //}

  let retries = 3;
  while (retries > 0) {
    try {
      const result = await chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      if (error.message.includes('503') && retries > 1) {
        retries--;
        console.warn(`Server Google bận, đang thử lại... (Còn ${retries} lần)`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }
      console.error("Chat Error:", error);
      break; 
    }
  }

  return lang === 'vi' 
    ? "Hệ thống đang có chút quá tải. Bạn vui lòng để lại số điện thoại hoặc gọi Hotline 09xx.xxx.xxx để được tư vấn ngay nhé!" 
    : "Our system is currently busy. Please contact our Hotline for immediate assistance!";
};