import axios from "axios";

const authKey = "wifP7t9q1wqkljOO3Lm0GGu6OkI2mgA3qLNqIGir";

const api = {
  //Gets nutrientes from the API
  getNutrients: function(topic) {
    const queryURL =
      "https://api.nal.usda.gov/ndb/search/?format=json&q=" +
      topic +
      "&sort=n&max=25&offset=0&api_key=" +
      authKey;
    console.log(queryURL);
    return axios.get(queryURL);
  },

  getProperties: function(ndb) {
    const queryURL =
      "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=" +
      authKey +
      "&nutrients=203&nutrients=204&nutrients=208&nutrients=291&nutrients=269&nutrients=205&ndbno=" +
      ndb;
    console.log(queryURL);
    return axios.get(queryURL);
  },

  getObjValue: function(value) {
    let result = {};

    // ES5
    // for (var i = 0; i < value.length; i++) {
    //   let val = value[i].value + "" + value[i].unit;
    //   if (value[i].nutrient === "Energy") result.Energy = val;
    //   if (value[i].nutrient === "Fiber, total dietary") result.Fiber = val;
    //   if (value[i].nutrient === "Protein") result.Protein = val;
    //   if (value[i].nutrient === "Sugars, total") result.Sugar = val;
    //   if (value[i].nutrient === "Total lipid (fat)") result.Fat = val;
    //   if (value[i].nutrient === "Carbohydrate, by difference") result.Carbohydrate = val;
    // }

    // ES6
   value.map((vals)=> {
      let val = vals.value + " " + vals.unit;
      if (vals.nutrient === "Energy") result.Energy = val;
      if (vals.nutrient === "Fiber, total dietary") result.Fiber = val;
      if (vals.nutrient === "Protein") result.Protein = val;
      if (vals.nutrient === "Sugars, total") result.Sugar = val;
      if (vals.nutrient === "Total lipid (fat)") result.Fat = val;
      if (vals.nutrient === "Carbohydrate, by difference") result.Carbohydrate = val;
    })
    return result;   
  },

  getValuesWithoutUnit: function(value){
   
    let result={};
    value.map((vals)=> {
    
      let val = vals.value ==='--' ?  0 : Math.round(vals.value);
      
      if (vals.nutrient === "Fiber, total dietary") result.Fiber = val;
      if (vals.nutrient === "Protein") result.Protein = val;
      if (vals.nutrient === "Sugars, total") result.Sugar = val;
      if (vals.nutrient === "Total lipid (fat)") result.Fat = val;
      if (vals.nutrient === "Carbohydrate, by difference") result.Carbohydrate = val;
    })
    return result;   
   
  }
};

export default api;
