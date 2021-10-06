import emoji from "node-emoji";
import "./db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(
    emoji.get("fire"),
    `Server started on port http://localhost:${PORT}`
  )
);
server.on("error", (err) => console.log(err));
