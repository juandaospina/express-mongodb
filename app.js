require('dotenv').config();
const dbConnect = require("./config/mongo");
const express = require('express');
const routes = require("./routes")
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

dbConnect()
