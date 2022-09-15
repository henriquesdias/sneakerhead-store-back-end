import db from "../Database/db.js";
import joi from "joi";
import bcrypt from "bcrypt";

const schemaSignUp = joi.object({
  email: joi.string().email().required(),
  name: joi.string().required().trim().min(3),
  password: joi.string().required().trim().min(4),
});

async function signUp(req, res) {
  const { email, name, password } = req.body;
  const validation = schemaSignUp.validate(
    { email, name, password },
    { abortEarly: false }
  );
  if (validation.error) {
    return res.status(422).send(validation.error.details.map((e) => e.message));
  }
  try {
    const user = await db.collection("users").findOne({ email });
    if (user) {
      return res.status(409).send("Email já cadastrado");
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    await db
      .collection("users")
      .insertOne({ email, name, password: passwordHash });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export { signUp };
