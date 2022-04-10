/**
 * 严格模式下this指向undefined
 */
"use strict"

var fn = function(){
    console.log(this);
}

fn();