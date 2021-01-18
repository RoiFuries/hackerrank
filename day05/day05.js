/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}



////////\\

function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    
    const d = Math.sqrt(perimeter * perimeter - 16 * area);
    
    const s1 = (perimeter + d) / 4;
    const s2 = area / s1;
    
    return [s1, s2].sort();
}