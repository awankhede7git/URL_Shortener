const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleURLShortening(req,res){
    const body = req.body;

    if(!body.url){
        return res.status(400).json("Enter a URL!!");
    }

    const shortID = nanoid(8);
     
    await URL.create({
        shortID: shortID,
        redirectURL : body.url,
        visitHistory : [],
    });

    return res.json({
        id : shortID
    });


};

module.exports = {
    handleURLShortening
};

