function Rectangle(a, b) {
    return {
        get length() { return a; },
        get width() { return b; },
        get perimeter() { return 2 * (a + b); },
        get area() { return a * b; }
    }
}