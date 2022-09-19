import db from "../Database/db.js";

async function finalizePurchase(req, res) {
  const purchase = req.body;
  if (!purchase) {
    return res.sendStatus(422);
  }
  try {
    await db.collection("storeSales").insertOne(purchase);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { finalizePurchase };
