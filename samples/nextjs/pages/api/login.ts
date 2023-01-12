import { NextApiHandler } from "next";

const login: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  // Do something with the email and password

  res.status(200).send({ message: "Success" });
}

export default login;
