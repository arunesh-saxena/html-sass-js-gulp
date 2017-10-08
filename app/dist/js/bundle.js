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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hello = 'hello world';

var about = function () {
    function about() {
        _classCallCheck(this, about);

        this.name = '';
    }

    _createClass(about, [{
        key: 'setName',
        value: function setName(name) {
            console.log(hello);
            this.name = name;
            // this.name = name;
        }
    }, {
        key: 'getName',
        value: function getName() {
            console.log(this.name);
        }
    }]);

    return about;
}();

// export {about};
// export default function about() {
//     this.name = 'nothing';
//     var hello = 'Hello ';
//     this.setName = function (name) {
//         this.name = name;
//     };
//     this.getName = function () {
//         console.log(hello + this.name);
//     }
// }


exports.default = about;

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
    console.log('now this is working looksgood now', _config.config);
}

testing();
var a = new _about2.default();
console.log(_about2.default);
a.setName('aruneshhello');
a.getName();
// a.getName();


var x = new _Example2.default();
x.speak();

},{"./Example":1,"./about":2,"./config.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNyY1xcanNcXEV4YW1wbGUuanMiLCJhcHBcXHNyY1xcanNcXGFib3V0LmpzIiwiYXBwXFxzcmNcXGpzXFxjb25maWcuanMiLCJhcHBcXHNyY1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBTSxPOzs7Ozs7O2dDQUNNO0FBQ0osb0JBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0g7Ozs7OztBQUdMLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7Ozs7Ozs7Ozs7OztBQ05BLElBQUksUUFBUSxhQUFaOztJQUNxQixLO0FBQ2pCLHFCQUFjO0FBQUE7O0FBQ1YsYUFBSyxJQUFMLEdBQVksRUFBWjtBQUNIOzs7O2dDQUNPLEksRUFBTTtBQUNWLG9CQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsaUJBQUssSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNIOzs7a0NBQ1M7QUFDTixvQkFBUSxHQUFSLENBQVksS0FBSyxJQUFqQjtBQUNIOzs7Ozs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7a0JBeEJxQixLOzs7Ozs7OztBQ0RyQixJQUFNLFNBQVM7QUFDWCxXQUFPLG9DQURJO0FBRVgsV0FBTztBQUZJLENBQWY7UUFJUSxNLEdBQUEsTTs7Ozs7QUNKUjs7QUFDQTs7OztBQVdBOzs7Ozs7QUFWQSxTQUFTLE9BQVQsR0FBbUI7QUFDZixZQUFRLEdBQVIsQ0FBWSxtQ0FBWjtBQUNIOztBQUVEO0FBQ0EsSUFBSSxJQUFJLHFCQUFSO0FBQ0EsUUFBUSxHQUFSO0FBQ0EsRUFBRSxPQUFGLENBQVUsY0FBVjtBQUNBLEVBQUUsT0FBRjtBQUNBOzs7QUFHQSxJQUFJLElBQUksdUJBQVI7QUFDQSxFQUFFLEtBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgRXhhbXBsZSB7XHJcblx0XHRcdFx0c3BlYWsoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVM2IWhlbGxvZGZmZGZkJyk7XHJcblx0XHRcdFx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7IiwidmFyIGhlbGxvID0gJ2hlbGxvIHdvcmxkJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWJvdXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICB9XHJcbiAgICBzZXROYW1lKG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhoZWxsbyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIC8vIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9O1xyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQge2Fib3V0fTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XHJcbi8vICAgICB0aGlzLm5hbWUgPSAnbm90aGluZyc7XHJcbi8vICAgICB2YXIgaGVsbG8gPSAnSGVsbG8gJztcclxuLy8gICAgIHRoaXMuc2V0TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbi8vICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuLy8gICAgIH07XHJcbi8vICAgICB0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coaGVsbG8gKyB0aGlzLm5hbWUpO1xyXG4vLyAgICAgfVxyXG4vLyB9IiwiY29uc3QgY29uZmlnID0ge1xyXG4gICAgaW5kZXg6ICdjb25maWcgZm9yIGluZGV4IGpzIGhlbGxsbyBhcnVuZXNoJyxcclxuICAgIGFib3V0OiAnY29uZmlnIGZvciBhYm91dCBqcydcclxufTtcclxuZXhwb3J0IHtjb25maWd9OyAgICAiLCJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcuanMnO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XHJcbmZ1bmN0aW9uIHRlc3RpbmcoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbm93IHRoaXMgaXMgd29ya2luZyBsb29rc2dvb2Qgbm93JywgY29uZmlnKTtcclxufVxyXG5cclxudGVzdGluZygpO1xyXG52YXIgYSA9IG5ldyBhYm91dCgpXHJcbmNvbnNvbGUubG9nKGFib3V0KVxyXG5hLnNldE5hbWUoJ2FydW5lc2hoZWxsbycpO1xyXG5hLmdldE5hbWUoKTtcclxuLy8gYS5nZXROYW1lKCk7XHJcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL0V4YW1wbGVcIjtcclxuXHJcbnZhciB4ID0gbmV3IEV4YW1wbGUoKTtcclxueC5zcGVhaygpOyJdfQ==
