import {config} from './config.js';
import about from './about';
function testing() {
    console.log('now this is working looksgood now', config);
}

testing();
var a = new about()
console.log(about)
a.setName('aruneshhello');
a.getName();
// a.getName();
import Example from "./Example";

var x = new Example();
x.speak();