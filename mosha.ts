class Rectangle {
  width: number;
  height: number;

  constructor(w: number = 0, h: number = 0) {
    this.width = w;
    this.height = h;
  }

  CalcCircumference(): number {
    return 2 * (this.width + this.height);
  }

  static WhoAmI(): string {
    return "I am a rectangle";
  }
}

let a = new Rectangle(2, 5);
console.log(a.CalcCircumference());
console.log(Rectangle.WhoAmI());

class Square extends Rectangle {
  constructor(s: number = 0) {
    super(s, s);
  }

  static WhoAmI(): string {
    return "I am a square";
  }
}

let b = new Square(4);
console.log(b.CalcCircumference());
console.log(Square.WhoAmI());
