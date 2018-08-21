(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a.futils={})})(this,function(a){'use strict';/**
   * distance between 2 vectors
   * @param {Point {x, y}} v1
   * @param {Point {x, y}} v2
   */var b=Math.max,c=Math.min,d=Math.pow;/**
   * faster Math.floor
   * @param {Number} n
   *//**
   * faster Math.round
   * @param {Number} n
   *//**
   * flip a coin // n for probability
   * @param {Number} n
   *//**
   * random 1 or -1 // n for probability
   * @param {Number} n
   *//**
   * to radians
   * @param {Number} n
   *//**
   * random in range
   * @param {Number} max
   * @param {Number} min
   *//**
   * round random in range
   * @param {Number} max
   * @param {Number} min
   *//**
   * generate number 0-9999
   * @param {Number} nums
   *//**
   * random array
   * @param {Array} elements
   *//**
   * clamp number
   * @param {Number} val
   * @param {Number} min
   * @param {Number} max
   *//**
   * check if number is close to another, based on threshold
   * @param {Number} val
   * @param {Number} target
   * @param {Number} threshold
   *//**
   * map value
   * @param {Number} value
   * @param {Number} inMin
   * @param {Number} inMax
   * @param {Number} outMin
   * @param {Number} outMax
   *//**
   * lerp - get percentage ( 0 - 1 ) between start and end
   * @param {Number} ratio
   * @param {Number} start
   * @param {Number} end
   *//**
   * get normamlized ratio ( 0-1 ) of number in a range ( opposite of lerp )
   * @param {Number} val
   * @param {Number} start
   * @param {Number} end
   *//**
   * count steps
   * @param {Number} val
   * @param {Number} stepSize
   * @param {Number} overflow
   *//**
   * return true/false if number in between
   * @param {Number} n1
   * @param {Number} n2
   * @param {Number} n3
   */a.distance=(a,b)=>Math.sqrt(d(b.x-a.x,2)+d(b.y-a.y,2)),a.floor=a=>a>>0,a.round=a=>~~(a+.5),a.coin=(a=.5)=>Math.random()<a,a.coinN=(a=.5)=>Math.random()<a?1:-1,a.rad=a=>a*Math.PI/180,a.random=(a,b=0)=>Math.random()*(a-b)+b,a.rrandom=(a,b=0)=>~~(Math.random()*(a-b)+b+.5),a.genNum=b=>{for(var c='',d=0;d<b;)c+='9',d++;var e=Math.round(Math.random()*+c).toString(),a='';for(d=e.length;d<b;)a+='0',d++;return a+=e.toString(),a},a.randomArray=a=>{var b;if('number'==typeof a){b=[];for(var c=a-1;0<=c;c--)b.push(c)}else b=a;for(c=b.length;c--;)b.push(b.splice(Math.floor(Math.random()*(c+1)),1)[0]);return b},a.clamp=(a,d,e)=>b(d,c(e,a)),a.near=(a,b,c)=>Math.abs(a-b)<=c,a.map=(a,d,e,f,g)=>(b(d,c(e,a))-d)/(e-d)*(g-f)+f,a.lerp=(a,b,c)=>b+(c-b)*a,a.norm=(a,b,c)=>(a-b)/(c-b),a.steps=(a,b,c)=>(a/b>>0)%c,a.between=(a,d,e)=>isNaN(a)||isNaN(d)||isNaN(e)?NaN:a>=c(d,e)&&a<=b(d,e),Object.defineProperty(a,'__esModule',{value:!0})});
