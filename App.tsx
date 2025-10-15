import React from 'react';
import { GoogleGenAI } from "@google/genai";
import App from './App';

// === AI Gating ===
const API_KEY = import.meta.env?.VITE_GOOGLE_API_KEY || "";
const aiEnabled = API_KEY.length > 0;
const genAI = React.useMemo(
  () => (aiEnabled ? new GoogleGenAI({ apiKey: API_KEY }) : null),
  [aiEnabled, API_KEY]
);
// === End AI Gating ===

export default function Root() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
