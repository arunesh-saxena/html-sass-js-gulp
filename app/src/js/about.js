var hello = 'hello world';
export default class about {
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
}

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