import * as functions from "firebase-functions";
import * as puppeteer from "puppeteer";

export const scrapeWebsiteDom = functions
  .runWith({ memory: "1GB" })
  .https.onRequest(async (req, res) => {
    // make a browser instance
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    // make a new tab
    const page = await browser.newPage();
    //navigate to my website
    await page.goto("https://www.masonseckykoebel.com", {
      waitUntil: "networkidle0",
    });

    const content = await page.content();

    res.send(content);
  });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
