export default class Point{
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
