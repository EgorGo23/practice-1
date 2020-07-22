/*
 First Part
*/

function isString(value) {
    return typeof value === 'string';
};


function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}


function isNan(value) {
    return typeof value !== 'symbol' && typeof value === 'number' && isNaN(value);
} 


function isBool(value) {
    return typeof value === 'boolean';
}


function isNull(value) {
    return value === null;
}



function isUndef(value) {
    return typeof value === 'undefined';
}


function isSymb(value) {
    return typeof value === 'symbol';
}


function isObj(value) {
    return value !== null && typeof value === 'object';
} 



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


function toStr(value) {
    value = value || '';
    return isSymb(value) 
        || isNan(value) 
            || isObj(value) 
                || isNull(value) 
                    || isUndef(value) ? '' : String(value);
}


function toBool(value) {
    return !!value;
}



function toObj(value) {
    return Object(value);
} 
