import { connect } from "../database";

export const login = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query(
      "SELECT * FROM USERS WHERE U_USER = ? and U_PASSWORD = ?",
      [req.body.user, req.body.pass]
    );
    if (rows.length > 0) {
      res.json({ message: "User found", user: rows[0] });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (e) {
    res.json({ message: "Error", error: e });
  }
};
