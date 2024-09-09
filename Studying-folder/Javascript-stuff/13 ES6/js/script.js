class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);      // super всегда должна быть первой строчкой!!!!!
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProprs() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic','rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number * basis);
}

calcOrDouble(3);

// div.showMyProprs();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(15, 10);

// console.log(square.calcArea());
// console.log(long.calcArea);