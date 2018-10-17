function squarePerimeterAndArea(side: number): [number, number]{
    let perimeter: number = side * 4;
    let area: number = side * side;
    return [perimeter, area];
}

console.log(squarePerimeterAndArea(67));