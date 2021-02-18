const express = require("express");
const router = express.Router();
const axios = require("axios");

const API = 'https://dev-manager.opus.plus/api/OP';

const checkAuth = (result, res) => {
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
}


router.get('/GetRepertories', (req, res, send) => {
    
    const { token, allDocs, search, lang } = req.query
    axios.get(`${API}/GetRepertories?token=${token}&allDocs=${allDocs}&search=${search}&lang=${lang}`)
        .then((result) => {
            checkAuth(result, res);
        })
});

router.get('/GetChapters', (req, res, send) => {
    
    const { token, allDocs, search, lang } = req.query
    axios.get(`${API}/GetChapters?token=${token}&allDocs=${allDocs}&search=${search}&lang=${lang}`)
        .then((result) => {
            checkAuth(result, res);
        })
});

router.get('/GetSymptoms', (req, res, send) => {
    
    const { token, allDocs, search, lang } = req.query
    axios.get(`${API}/GetSymptoms?token=${token}&allDocs=${allDocs}&search=${search}&lang=${lang}`)
        .then((result) => {
            checkAuth(result, res);
        })
});

router.get('/GetReferences', (req, res, send) => {
    
    const { token, allDocs, search, lang } = req.query
    axios.get(`${API}/GetReferences?token=${token}&allDocs=${allDocs}&search=${search}&lang=${lang}`)
        .then((result) => {
            checkAuth(result, res);
        })
});


router.get('/LoginUser', (req, res, send) => {
    
    const { token, allDocs, search, lang } = req.query
    axios.get(`${API}/GetReferences?token=${token}&allDocs=${allDocs}&search=${search}&lang=${lang}`)
        .then((result) => {
            checkAuth(result, res);
        })
});

module.exports = router;