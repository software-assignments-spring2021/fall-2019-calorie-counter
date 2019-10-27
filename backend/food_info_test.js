food_api=require("./food_info.js");

json_data=food_api.getFoodData("Pizza", function(response){
console.log(response);
});