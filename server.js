import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
	console.log("Server Started on Port 3000");
});