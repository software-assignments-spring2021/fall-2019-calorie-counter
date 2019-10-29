food_api=require("./food_info.js");


/*var id=food_api.getFoodID("Pizza", function(response){
//console.log(response);
console.log(response.foods[0].fdcId);
return response.foods[0].fdcId;;
});*/



food_api.getFoodData(339999, function(response){
    //console.log(response);
    console.log(response.foodNutrients);
});


