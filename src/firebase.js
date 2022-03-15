import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxuxn9S8Prl2lD0JoKhevNVLFLqu-mzys",
  authDomain: "ukraine-dashboard-app.firebaseapp.com",
  projectId: "ukraine-dashboard-app",
  storageBucket: "ukraine-dashboard-app.appspot.com",
  messagingSenderId: "88213970998",
  appId: "1:88213970998:web:6c07c7d3845bc2ee4ab897",
  measurementId: "G-KZFRLXGSBE",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
