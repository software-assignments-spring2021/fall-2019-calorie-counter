const axios = require('axios')
api_key='gHImpDLBeNUC8KUmNFCCCh9j74zv3SfstjJ6MidK'


module.exports={
    getFoodData: function(food_item,callback){
    axios.post('https://api.nal.usda.gov/fdc/v1/search?api_key='+api_key, {
        'generalSearchInput': food_item
    })
    .then((res) => {
    //console.log(`statusCode: ${res.statusCode}`)
    //console.log(res.data)
    return callback(res.data);
    })
    .catch((error) => {
        console.error(error)
    })
    }
};