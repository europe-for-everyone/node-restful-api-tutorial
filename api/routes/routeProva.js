const express = require("express");
const router = express.Router();
const axios = require("axios");

const API = 'https://dev-manager.opus.plus/api/OP';



router.get('/GetRepertories', (req, res, send) => {
    const {token, allDocs, search, lang} = req.query
    axios.get(`${API}/GetRepertories?token=${token}&allDocs=${allDocs}&search=${search}&lang=${lang}`)
        .then((result) => {
            if (result.data.data.errors) {
                var error = result.data?.data?.errors[0]?.description;
                if (error == "TOKEN NOT FOUND" || error == "Session expired") {
                    res.status(401).json({
                        error: "No authorization"
                    })
                }
            } else {
                res.send(result.data);
            }
        })
});

module.exports = router;