const express = require("express");
const router = express.Router();
const axios = require("axios");

const API = 'https://dev-manager.opus.plus/api/OP';



router.get('/', (req, res, send) => {
    console.log("req", req);

    axios.get(`${API}/GetRepertories?token=0195674add0d006c209dfd010889fcd10&search=synth&lang=it,en&allDocs=true`)
        .then((result) => {
            if (result.data?.data?.errors[0]?.description == "TOKEN NOT FOUND") {
                res.status(401).json({
                    error: "No authorization"
                });
            }
        })
});

module.exports = router;