const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.get("/user", (req, res) => {
	console.log("GET /user");
	res.send([
		{ name: "John", hobby: "football" },
		{ name: "Maira", hobby: "code" },
		{ name: "Daria", hobby: "yoga" },
		{ name: "Janaina", hobby: "buimedicine" },
	]);
});

app.post("/user", (req, res) => {
	console.log("here at post");
	res.status(200);
});

app.post("/hobby", (req, res) => {
	console.log("POST /hobby");
	res.status(200);
});

app.delete("/user", (req, res) => {
	console.log("DELETE /user");
	res.status(200);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
