# js中的模块化

#### 精简回答：

1. es6:export function(){} export default function(){}  import {aaa,bbb} from './xxx.js'

2. commonjs（node.js）:module.exports = {} exports.a = 1 var module = require('xxx.js')

3. AMD:define(['./aaa','./bbb'],function(a,b){a.done()b.done()})
