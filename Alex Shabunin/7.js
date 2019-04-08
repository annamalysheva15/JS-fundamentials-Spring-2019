//7. Array of functions
function transform(arr) {

    var timeArray = [];

    for (var i = 0; i < arr.length; i++)(function(i) {

        var itemF = function() {
            console.log( arr[i] );
        };

        timeArray.push(itemF);

    })(i);

    return timeArray;
}
var base = [10,20,30,40,50]
var newArray = transform(base);

newArray[4]();
newArray[3]();
