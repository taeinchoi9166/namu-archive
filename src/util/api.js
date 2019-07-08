const request = require('request');

exports.searchCard = (keyword,page) => {
     return new Promise(resolve => {
         request.get('http://node.sproutseed.ga/api/search/'+keyword +'/'+page,(err,body,html)=>{
            resolve(body);
         });
     });
};

exports.getCardInfo = async (id) => {
    return new Promise(async resolve=>{
        request.get('http://node.sproutseed.ga/api/get/'+id,(err,body,html)=> {
            const errorStr = JSON.stringify({
                "name":"에러카드",
                "attr":"에러",
                "engName":"Error card",
                "setList":[],
                "price":{"tcgplayer":0,"ebay":0,"amazon":0},
                "text":"오류입니다. 카드에 대한 정보가 없는것 같습니다.",
                "imageURL":""
            });
            console.log(body ? body.body : errorStr);
            resolve(body ? body.body : errorStr);
        });
    });
};