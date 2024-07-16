let num = [11,22,33,44,55];

// for Each Method
// syntax : arrayName.forEach( (value/element) => process)
console.log("For Each");
num.forEach((e) => console.log(e));
num.forEach((e) => console.log(e*e));
num.forEach((e,i)=>console.log("Element : "+e+" Index : "+i)); 

// Map Method
// syntax : arrayName.map( (value/element) => process)
console.log("Map");
num.map((e) => console.log(e/e)); 
let newNum = num.map( (e) => e/e); 
console.log(newNum); 

// Filter Method
// syntax : let newArray = arr.filter ( (element) => condition for filter )
console.log("Filter");
let filterNum = num.filter( (e) => e%2!=0 );
console.log("Odd Numbers : "+filterNum);

// Reduce Method
console.log("Reduce");
let reduceNum = num.reduce((res,cur) => (res+cur));
console.log(reduceNum); 

let maxNum = num.reduce((e1,e2) => {
    return (e1>e2) ? e1 : e2;
});
console.log("Max : "+maxNum);