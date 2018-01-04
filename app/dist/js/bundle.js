(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Example = function () {
				function Example() {
								_classCallCheck(this, Example);
				}

				_createClass(Example, [{
								key: 'speak',
								value: function speak() {
												console.log('ES6!hellodffdfd');
								}
				}]);

				return Example;
}();

module.exports = Example;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = about;
var hello = 'hello world';
/* export default class about {
    constructor() {
        this.name = '';
    }
    setName(name) {
        console.log(hello);
        this.name = name
        // this.name = name;
    };
    getName() {
        console.log(this.name);
    }
} */

function about() {
    var name = 'nothing';
    var hello = 'Hello ';
    var setName = function setName(name) {
        this.name = name;
    };
    var getName = function getName() {
        return hello + this.name;
    };
    return {
        setName: setName,
        getName: getName
    };
};
// 'use strict';
// var about = (function () {
//     var name = 'nothing';
//     var setName = function (name) {
//         this.name = name;
//     };
//     var getName = function () {
//         return this.name;
//     };
//     var init = function () {
//         console.log('this is init');
//     };
//     console.log(name, hello);
//     return {init: init, setName: setName, getName: getName}
// }());

// export default about;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var config = {
    index: 'config for index js helllo arunesh',
    about: 'config for about js'
};
exports.config = config;

},{}],4:[function(require,module,exports){
'use strict';

var _config = require('./config.js');

var _about = require('./about');

var _about2 = _interopRequireDefault(_about);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testing() {
    console.log('now this is working looks good now', _config.config);
}

testing();
var a = (0, _about2.default)();
// console.log(about)
a.setName('arunesh');
console.log(a.getName());
// a.setName('aruneshhello'); a.getName(); a.getName();

var x = new _Example2.default();
x.speak();

},{"./Example":1,"./about":2,"./config.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNyY1xcanNcXEV4YW1wbGUuanMiLCJhcHBcXHNyY1xcanNcXGFib3V0LmpzIiwiYXBwXFxzcmNcXGpzXFxjb25maWcuanMiLCJhcHBcXHNyY1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTSxPOzs7Ozs7O2dDQUNNO0FBQ0osb0JBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0g7Ozs7OztBQUdMLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7Ozs7Ozs7a0JDU3dCLEs7QUFmeEIsSUFBSSxRQUFRLGFBQVo7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjZSxTQUFTLEtBQVQsR0FBaUI7QUFDNUIsUUFBSSxPQUFPLFNBQVg7QUFDQSxRQUFJLFFBQVEsUUFBWjtBQUNBLFFBQUksVUFBVSxTQUFWLE9BQVUsQ0FBVSxJQUFWLEVBQWdCO0FBQzFCLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDSCxLQUZEO0FBR0EsUUFBSSxVQUFVLFNBQVYsT0FBVSxHQUFZO0FBQ3RCLGVBQVEsUUFBUSxLQUFLLElBQXJCO0FBQ0gsS0FGRDtBQUdBLFdBQU07QUFDRixpQkFBUSxPQUROO0FBRUYsaUJBQVE7QUFGTixLQUFOO0FBSUg7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDN0NBLElBQU0sU0FBUztBQUNYLFdBQU8sb0NBREk7QUFFWCxXQUFPO0FBRkksQ0FBZjtRQUlRLE0sR0FBQSxNOzs7OztBQ0pSOztBQUNBOzs7O0FBWUE7Ozs7OztBQVhBLFNBQVMsT0FBVCxHQUFtQjtBQUNmLFlBQVEsR0FBUixDQUFZLG9DQUFaO0FBQ0g7O0FBRUQ7QUFDQSxJQUFJLElBQUksc0JBQVI7QUFDQTtBQUNBLEVBQUUsT0FBRixDQUFVLFNBQVY7QUFDQSxRQUFRLEdBQVIsQ0FBWSxFQUFFLE9BQUYsRUFBWjtBQUNBOztBQUlBLElBQUksSUFBSSx1QkFBUjtBQUNBLEVBQUUsS0FBRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBFeGFtcGxlIHtcclxuXHRcdFx0XHRzcGVhaygpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUzYhaGVsbG9kZmZkZmQnKTtcclxuXHRcdFx0XHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTsiLCJ2YXIgaGVsbG8gPSAnaGVsbG8gd29ybGQnO1xyXG4vKiBleHBvcnQgZGVmYXVsdCBjbGFzcyBhYm91dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgIH1cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhlbGxvKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgLy8gdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH07XHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xyXG4gICAgdmFyIG5hbWUgPSAnbm90aGluZyc7XHJcbiAgICB2YXIgaGVsbG8gPSAnSGVsbG8gJztcclxuICAgIHZhciBzZXROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoaGVsbG8gKyB0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHNldE5hbWU6c2V0TmFtZSxcclxuICAgICAgICBnZXROYW1lOmdldE5hbWVcclxuICAgIH1cclxufTtcclxuLy8gJ3VzZSBzdHJpY3QnO1xyXG4vLyB2YXIgYWJvdXQgPSAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdmFyIG5hbWUgPSAnbm90aGluZyc7XHJcbi8vICAgICB2YXIgc2V0TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbi8vICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuLy8gICAgIH07XHJcbi8vICAgICB2YXIgZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4vLyAgICAgfTtcclxuLy8gICAgIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGluaXQnKTtcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZyhuYW1lLCBoZWxsbyk7XHJcbi8vICAgICByZXR1cm4ge2luaXQ6IGluaXQsIHNldE5hbWU6IHNldE5hbWUsIGdldE5hbWU6IGdldE5hbWV9XHJcbi8vIH0oKSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBhYm91dDsiLCJjb25zdCBjb25maWcgPSB7XHJcbiAgICBpbmRleDogJ2NvbmZpZyBmb3IgaW5kZXgganMgaGVsbGxvIGFydW5lc2gnLFxyXG4gICAgYWJvdXQ6ICdjb25maWcgZm9yIGFib3V0IGpzJ1xyXG59O1xyXG5leHBvcnQge2NvbmZpZ307ICAgICIsImltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZy5qcyc7XHJcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0JztcclxuZnVuY3Rpb24gdGVzdGluZygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdub3cgdGhpcyBpcyB3b3JraW5nIGxvb2tzIGdvb2Qgbm93JywgY29uZmlnKTtcclxufVxyXG5cclxudGVzdGluZygpO1xyXG52YXIgYSA9IGFib3V0KCk7XHJcbi8vIGNvbnNvbGUubG9nKGFib3V0KVxyXG5hLnNldE5hbWUoJ2FydW5lc2gnKTtcclxuY29uc29sZS5sb2coYS5nZXROYW1lKCkpO1xyXG4vLyBhLnNldE5hbWUoJ2FydW5lc2hoZWxsbycpOyBhLmdldE5hbWUoKTsgYS5nZXROYW1lKCk7XHJcblxyXG5pbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9FeGFtcGxlXCI7XHJcblxyXG52YXIgeCA9IG5ldyBFeGFtcGxlKCk7XHJcbnguc3BlYWsoKTsiXX0=
