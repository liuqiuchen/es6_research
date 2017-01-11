// class不存在变量提升
class Point{
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
}

Object.assign(Point.prototype, {
	toString() {
		return '(' + this.x + ', ' + this.y + ')'
	}
});

console.log(Object.getOwnPropertyNames(Point.prototype));

let Person = new class {
    constructor (name) {
        this.name = name;
    }
    sayName () {
        console.log(this.name);
    }
}('张三');

Person.sayName();

export { Point };



