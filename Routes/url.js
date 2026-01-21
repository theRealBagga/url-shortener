const express = require("express")
const {handleGenerateNewShortUrl, handleGetRedirectUrl} = require('../Controller/url')
const router = express.Router();

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleGetRedirectUrl);

module.exports = router