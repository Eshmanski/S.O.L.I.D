// Open Close Principle

// Классы должны быть спроетированны так что,
// если добовляется что-то новое то это не меняет наш старый код.
/*
class Square {
    constructor(size) {
        this.type = 'square';
        this.size = size;
    }
}

class Circle {
    constructor(radius) {
        this.type = 'circle';
        this.radius = radius;
    }
}


//  1.  После написания скрипта, появляется задача 
//      добавить прямоугольник.
class Rect {
    constructor(width, height) {
        this.type = 'rect';
        this.width = width;
        this.height = height;
    }
}
//  ----------------------------------------------


class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if (shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI;
            } else if (shape.type === 'square') {
                acc += shape.size ** 2;
            }
            
//  2.  Из-за добавления новой фигуры надо 
//      изменять метод, вычисляющий сумму площадей,
//      что нарушает принцип.
            else if (shape.type === 'rect') {
                acc += shape.width * shape.height;
            }
//  -----------------------------------------------
            return acc
        }, 0);
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(2, 10)
]);

console.log(calc.sum());
*/


//  3.  Решение не нарушающие принцип:
//
//      Создаем общий родительский класс Shape,
//      в котором инициализирум метод area(площадь),
//      а имплементацию метода реализуем в дочернем классе

class Shape {
    area() {
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape  {
    constructor(size) {
        super();

        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();

        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super();

        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

//  4.  Теперь без проблем можно добавлять новые фигуры
class Triangle extends Shape {
    constructor(a, b) {
        super();
        
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a * this.b / 2;
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();
            return acc;
        }, 0);
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect(2,10),
    new Triangle(10, 12),
]);

console.log(calc.sum());
