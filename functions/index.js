const { logger } = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const firestore = admin.firestore();

const getAvatar = async (req, res) => {
  try {
    const snapshot = await firestore.collection("avatars").get();
    const data = snapshot.docs.map((doc) => doc.data());
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
