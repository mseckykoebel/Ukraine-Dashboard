import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQpbt9ZZi-mpU5cTpx3gE9tRPW2Tikh8I",
  authDomain: "ukraine-dashboard.firebaseapp.com",
  projectId: "ukraine-dashboard",
  storageBucket: "ukraine-dashboard.appspot.com",
  messagingSenderId: "269602539853",
  appId: "1:269602539853:web:c5e563eb73eca8a7d84f04",
  measurementId: "G-WRRBHFXWNN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
