import {GoogleGenerativeAI} from "@google/generative-ai"
import process from "process";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export default model 

