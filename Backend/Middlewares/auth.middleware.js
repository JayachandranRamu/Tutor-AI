const jwt = require("jsonwebtoken");
const { ListModel } = require("../Model/list.model");
const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        const tkn = await ListModel.findOne({ token });
        if (tkn) {
            res.status(201).send({ "message": "Please Login" })
        }
        else {
            jwt.verify(token, "users", (err, decoded) => {
                if (decoded) {
                    req.body.username = decoded.username;
                    req.body.userId = decoded.userId;
                    next();
                }
                else {
                    res.send(err)
                }
            })
        }
    }
    else {
        res.status(201).send({ "message": "Please Login." })
    }
}
module.exports = { auth };