import * as functions from "firebase-functions";
import * as puppeteer from "puppeteer";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const options = { memory: "2GB", timeoutSeconds: 300 };

export const findName = async () => {
  const url = "https://www.masonseckykoebel.com";
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setRequestInterception(true); // not sure what this does yet
  page.on("request", (req) => {
    if (
      req.resourceType() == "stylesheet" ||
      req.resourceType() == "font" ||
      req.resourceType() == "image"
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
      // TODO: do something
      // const first
  })
};

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
