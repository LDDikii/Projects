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

div.showMyProprs();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(15, 10);

// console.log(square.calcArea());
// console.log(long.calcArea);