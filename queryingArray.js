var JShelpers = {
    removeFromArray: function (myObject, prop, value) {
        return myObject.filter(function (item) {
            return item[prop] !== value;
        });

    },
    itemIsInArray: function (myObject, prop, value) {
      for(i = 0; i < myObject.length; i++){
        if (myObject[i][prop] == value) {
            return true;
        }
      }
        return false;
    },
    getItemFromArray: function (myObject, prop, value) {
      for(i = 0; i < myObject.length; i++){
        if (myObject[i][prop] == value) {
                return myObject[i];
            }
        }
        return "";
    },
    sumItemInArray: function (myObject, prop) {
        var summation = 0;
        myObject.forEach(function (item) {
            summation += parseFloat(item[prop]);
        });
        return summation;

    }
}
