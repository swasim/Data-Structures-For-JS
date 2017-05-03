var array = ["Queen","Lady",3,4,5,6,7,"Bug","Beyonce"];
function transform(array){

    var obj ={};
    var lastVal = array.length-1;
    obj[array[0]] = array[lastVal]; 
    //if obj property is a # then the property changes the # to a
    //string value (ie. array[0]= 1....obj.key would be "1")

    console.log(obj);
}

transform(array);
