import { connect } from "../database";

export const createComment = async (req, res) => {
  try {
    const db = await connect();
    await db.query("INSERT INTO COMMENTS (C_USER, C_COMMENT) VALUES (?,?)", [
      req.body.user,
      req.body.comment,
    ]);
    res.json({
      ...req.body,
    });
  } catch (e) {
    res.json({ message: "Error", error: e });
  }
};

export const getComments = async (req, res) => {
  try {
    const db = await connect();
    const [rows] = await db.query('SELECT C.ID AS "ID", U.U_NAME AS "NAME", C.C_DATE AS "DATE", C.C_COMMENT AS "COMMENT" FROM COMMENTS C INNER JOIN USERS U ON U.ID = C.C_USER');
    res.json(rows);
  } catch (e) {
    res.json({ message: "Error", error: e });
  }
};
