import express from "express";
import cors from "cors";
import * as fs from "fs";
import * as storage from "./storage.json" assert {type: 'json'}

const app = express();
const port = 3000;

app.use(cors());

app.put("/send/:message", (req, res) => {
	var virtualStorage = storage.default
	console.log("adding message");
	virtualStorage["messages"] += (`", \\"${req.params["message"]}\\"`)
	fs.writeFileSync("storage.json", JSON.stringify(virtualStorage))
	res.send(`added: ${req.params["message"]}`);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
