

    function getArea(length, width) {
        let area  = length * width;  
        return area;
    }

    function getPerimeter(length, width) {
        let perimeter =  length + length + width + width;
        return perimeter;
    }



    console.log(getArea(3, 4.5));
    console.log(getPerimeter(3, 4.5));


///////////////////////////////////////////

// por que esto no sirve?

// let length = 3;
// let width = 5;

// function getArea(length, width) {
//     let area  = length * width;  
//     return area;
// }

// function getPerimeter(length, width) {
//     let perimeter =  length + length + width + width;
//     return perimeter;
// }



// console.log(getArea());
// console.log(getPerimeter());


//// no entendí esto de abajo ¿Por qué  sale 24?

function factorial(n) {
    if (n <= 1) { 
        return 1;
    }
    console.log(n);
    return n * factorial(n - 1);
}

console.log(factorial(4))



