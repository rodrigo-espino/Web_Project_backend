import { connect } from "../database";

export const signup = async (req, res) => {
  try {
    const db = await connect();

    const [rows] = await db.query("SELECT * FROM USERS WHERE U_USER = ?", [
      req.body.user,
    ]);
    if (rows.length > 0) {
      res.status(406, {message: "User already exists"})
    } else {
      await db.query(
        "INSERT INTO USERS (U_NAME, U_USER, U_PASSWORD) VALUES (?,?,?)",
        [req.body.name, req.body.user, req.body.pass]
      );
      res.json({
        ...req.body,
      });
    }
  } catch (e) {
    res.json({ message: "Error", error: e });
    res.status(500);
  }
};
