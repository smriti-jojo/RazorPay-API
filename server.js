const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/payment", require("./routes/payment"));
app.listen(port, () => console.log(`server started on port ${port}`));
