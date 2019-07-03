const Crawler = require("crawler");
const request = require('request');

exports.getData = () => {
    const crawler = () => {
        return new Promise(resolve => {
            let result;
            request.get("http://node.sproutseed.ga/api/get/8421",(err,body,html)=>{
                resolve(body.body);
            });
        });

    };
    crawler().then(res=>{
        console.log(res);
        return res;
    });
};