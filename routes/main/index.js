const IndexRouter = require("express").Router();

IndexRouter.get("/", (req, res) => {
    res.render("index", { title: "Portfolio" });
});

IndexRouter.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

module.exports = IndexRouter;