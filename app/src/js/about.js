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

export default function about() {
    var name = 'nothing';
    var hello = 'Hello ';
    var setName = function (name) {
        this.name = name;
    };
    var getName = function () {
        return (hello + this.name);
    }
    return{
        setName:setName,
        getName:getName
    }
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