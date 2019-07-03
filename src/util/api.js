const request = require('request');

exports.searchCard = (keyword,page) => {
    const process = () => {
     return new Promise(resolve => {
         request.get('http://node.sproutseed.ga/api/search/'+keyword+'/'+page,(err,body,html)=>{
            resolve(body);
         });
     })
    };
    process().then(result=>{
       return result;
    });
};

exports.getCardInfo = async (id) => {
    // const process = () => {
    //     return new Promise(resolve=>{
    //
    //     });
    // };
    // process().then(result=>{
    //     console.log(result);
    return new Promise(async resolve=>{
        request.get('http://node.sproutseed.ga/api/get/'+id,(err,body,html)=> {
            console.log(body.body);
            resolve(body.body);
        });
    });
}