import {fun} from './index2.js'

function getComponent() {
    const element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    return import('lodash')
        .then(({default: _}) => {
            const element = document.createElement('div');

            element.innerHTML = _.join(['Hello', 'webpack'], ' ');

            return element;
        })
        .catch((error) => 'An error occurred while loading the component');
}
console.log(getComponent())
getComponent().then((component) => {
    document.body.appendChild(component);
});
fun();