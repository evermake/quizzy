const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://b2.inno-js.ru");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const loadJson = (filepath, encoding = "utf8") =>
    JSON.parse(
        fs.readFileSync(path.resolve(__dirname, `${filepath}.json`), { encoding })
    );

router.get("/getQuizzesList", (req, res) => {
    setTimeout(() => {
        const data = loadJson('./getQuizzesList')
        res.send(
            data
        );
    }, 1000)
});

module.exports = router
