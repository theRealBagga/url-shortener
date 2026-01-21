const shortid = require("shortid")
const URL = require('../Model/url')

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({msg : "URL Required to Proceed"})
    }
    const shortenedId = shortid.generate();
    await URL.create({
        shortId : shortenedId,
        originalURL : body.url,
        visitHistory : [],
    })
    return res.render("home", {
        id : shortenedId
    })

}

async function handleGetRedirectUrl(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOneAndUpdate({shortId}, { $push : {
        viewHistory : {
            timestamp :  Date.now()
        }
    }})
    return res.redirect(result.originalURL);
}
module.exports = {
    handleGenerateNewShortUrl,
    handleGetRedirectUrl,
}