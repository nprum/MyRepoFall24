//alert("Hello World!");

// Declare variable 
var hello = "hello";

console.log("This is good for debuging " + hello);

function print3Ways(){
    alert("Pop up window!");
    console.log("prints to the developer console");
    document.write("This will override the entire HTML document");
}

const arr=[1,2,3,4,5]
function funWithArrays(){
    document.write("The sum of the elements in the array is " +getSum());
    document.write("<br> The minimum element in the array is "+ findMin());
    document.write("<br>The max element is "+findMax());
    document.write("<br> The average of the element in the array is "+average());
}
function getSum(){
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        s+= arr[i];
     }
     return s;
    }

function findMax(){
    m = a[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > m){
            m=arr[i];
        }
    }
    return m;
}

function firstFunction(callback){
    console.log("about to execute callback function");
    callback();
}

function myCallbackFunction(){
    console.log("this is the callback function that does something special.");
}

function soManyFunctions(){
    console.log("in soManyFunctions. Begin function calls.");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFunctions.  ")
}