// import 命令具有提升效果，会提升到整个模块的头部，首先执行
/**
 * Babel默认只转换新的JavaScript句法（syntax），
 * 而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，
 * 以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
 * 举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。
 * 如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
 */
import 'babel-polyfill';
import $ from 'jquery';
import cats from './cats';
import * as profile from './profile';
// 给默认导出的函数命名
import customName from './export-default';
import Point from './class';

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for(const cat of cats) {
	$('<li></li>').text(cat).appendTo(ul);
}

let point = new Point(5, 5);
console.log(point.toString());

//customName();
//console.log(profile.firstName + ', ' + profile.lastName + ', ' + profile.year);
//console.log(profile.foo);



