const axios = require('axios')
api_key='gHImpDLBeNUC8KUmNFCCCh9j74zv3SfstjJ6MidK'


module.exports={
    getFoodID: function(food_item){
    axios.post('https://api.nal.usda.gov/fdc/v1/search?api_key='+api_key, {
        'generalSearchInput': food_item
    })
    .then((res) => {
    //console.log(`statusCode: ${res.statusCode}`)
    //console.log(res.data)
    this.getFoodData(res.data.foods[0].fdcId)
        .then(res=>{
            print(res);
        })
        .catch(error=>{
            console.error(error);
        })
    })
    .catch((error) => {
        console.error(error)
    })
    },

    getFoodData: function(food_id){
        axios.get('https://api.nal.usda.gov/fdc/v1/'+food_id+'?api_key='+api_key, {
        })
        .then((res) => {
        //console.log(`statusCode: ${res.statusCode}`)
        console.log(res.data.foodNutrients);
        //return res.data.foodNutrients;
        })
        .catch((error) => {
            console.error(error)
        })
        }
    
};

function print(data){
    console.log('----');
    console.log(data);
};