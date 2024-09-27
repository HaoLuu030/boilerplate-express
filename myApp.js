let express = require("express");
let app = express();

const absolutePath = __dirname + '/views/index.html';

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost: ${PORT}`);
})
module.exports = app;
