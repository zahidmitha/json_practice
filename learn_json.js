var jsonarray = '[{"name": "Nandos", "diet":[]},{"name": "Dorsia", "diet": "Expensive"} ]';

result = jQuery.parseJSON(jsonarray);

$.each(result, function(restaurant, item){
        console.log(item.diet);
});

var example = {restaurant1: {name: "Dorsia", long: "12", lat: "15", diets: ["vegan", "halal", "human"]}, restaurant2: {name: "Texarcana", long: "13", lat: "15" }};

$.each(example, function(rest, item){
    if (item.diets){
    console.log(item.diets);
    };
});

// var string = '{ "jamaica": "bobsled" }';
// string = '{restaurant1: {name: "Dorsia", long: "12", lat: "15"}, restaurant2: {name: "Texarcana", long: "13", lat: "15" }}';
// string = '{"name":"John"}';
//result = jQuery.parseJSON(string);
// console.log(result);
 // $(".stuff").append("Hello");

          // for (var r in result) {