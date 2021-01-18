function Rectangle(a, b) {
    return {
        get length() { return a; },
        get width() { return b; },
        get perimeter() { return 2 * (a + b); },
        get area() { return a * b; }
    }
}



function getCount(objects) {
    let c = 0;
    
    for (const o in objects) {
        if (objects[o].x == objects[o].y) {
            c++;
        }
    }
    
    return c;
}
