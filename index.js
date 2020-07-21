var num = 12;
var bool = true;
var str = '123';
var nul = null;
var undef = undefined;
var obj = {a: 1, b: '2'};
var sym = Symbol('name');
var nan = NaN;

/*
 First Part
*/

function isString(value) {
    return typeof value === 'string';
};
// console.log(isString(num));
// console.log(isString(undef));
// console.log(isString(bool));
// console.log(isString(str));
// console.log(isString(nul));
// console.log(isString(obj));
// console.log(isString(sym));
// console.log(isString(nan));
// console.log(isString());

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
// console.log(isNumber(num));
// console.log(isNumber(undef));
// console.log(isNumber(bool));
// console.log(isNumber(str));
// console.log(isNumber(nul));
// console.log(isNumber(obj));
// console.log(isNumber(sym));
// console.log(isNumber(nan));
// console.log(isNumber());

function isNan(value) {
    return typeof value !== 'symbol' && typeof value === 'number' && isNaN(value);
} 
// console.log(isNan(nan));
// console.log(isNan(num));
// console.log(isNan(undef));
// console.log(isNan(bool));
// console.log(isNan(str));
// console.log(isNan(nul));
// console.log(isNan(obj));
// console.log(isNan(sym));
// console.log(isNan());


function isBool(value) {
    return typeof value === 'boolean';
}
// console.log(isBool(num));
// console.log(isBool(undef));
// console.log(isBool(bool));
// console.log(isBool(str));
// console.log(isBool(nul));
// console.log(isBool(obj));
// console.log(isBool(sym));
// console.log(isBool());


function isNull(value) {
    return value === null;
}
// console.log(isNull(num));
// console.log(isNull(undef));
// console.log(isNull(bool));
// console.log(isNull(str));
// console.log(isNull(nul));
// console.log(isNull(obj));
// console.log(isNull(sym));
// console.log(isNull());


function isUndef(value) {
    return typeof value === 'undefined';
}
// console.log(isUndef(nan));
// console.log(isUndef(num));
// console.log(isUndef(undef));
// console.log(isUndef(bool));
// console.log(isUndef(str));
// console.log(isUndef(nul));
// console.log(isUndef(obj));
// console.log(isUndef(sym));
// console.log(isUndef());


function isSymb(value) {
    return typeof value === 'symbol';
}
// console.log(isSymb(nan));
// console.log(isSymb(num));
// console.log(isSymb(undef));
// console.log(isSymb(bool));
// console.log(isSymb(str));
// console.log(isSymb(nul));
// console.log(isSymb(obj));
// console.log(isSymb(sym));
// console.log(isSymb());


function isObj(value) {
    return value !== null && typeof value === 'object';
} 
// console.log(isObj(nan));
// console.log(isObj(num));
// console.log(isObj(undef));
// console.log(isObj(bool));
// console.log(isObj(str));
// console.log(isObj(nul));
// console.log(isObj(obj));
// console.log(isObj(sym));
// console.log(isObj());


/*
 Second Part
*/

function toNumber(value) {
    value = value || 0;
    return isSymb(value) 
        || isNan(value) 
            || isObj(value) 
                || isUndef(value) ? 0 : Number(value);
}
// console.log(toNumber(num));
// console.log(toNumber(bool));
// console.log(toNumber(str));
// console.log(toNumber(obj));
// console.log(toNumber(sym));
// console.log(toNumber());
// console.log(toNumber(nul));
// console.log(toNumber(undef));
// console.log(toNumber(nan));



function toStr(value) {
    value = value || '';
    return isSymb(value) 
        || isNan(value) 
            || isObj(value) 
                || isNull(value) 
                    || isUndef(value) ? '' : String(value);
}
// console.log(toStr(num));
// console.log(toStr(bool));
// console.log(toStr(str));
// console.log(toStr(obj));
// console.log(toStr(sym));
// console.log(toStr());
// console.log(toStr(nul));
// console.log(toStr(undef));
// console.log(toStr(nan));



function toBool(value) {
    return !!value;
}
// console.log(toBool(num));
// console.log(toBool(bool));
// console.log(toBool(str));
// console.log(toBool(obj));
// console.log(toBool(sym));
// console.log(toBool());
// console.log(toBool(nul));
// console.log(toBool(undef));
// console.log(toBool(nan));



function toObj(value) {
    return Object(value);
} 
// console.log(toObj(num));
// console.log(toObj(bool));
// console.log(toObj(str));
// console.log(toObj(obj));
// console.log(toObj(sym));
// console.log(toObj());
// console.log(toObj(nul));
// console.log(toObj(undef));
// console.log(toObj(nan));
