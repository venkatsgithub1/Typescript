// (variable:type,....): type (return type)
interface SearchFunction {
    (source:string,substring:string):boolean
}

// 1.
let mySearch: SearchFunction;
mySearch = function (source: string, substring: string) {
    return source.search(substring) > -1;
}

// 2.
// Here interfaces' variable types will be
// used as reference types.
let mySearch2: SearchFunction;
mySearch2 = function (source,substring) {
    return source.search(substring) > -1;
}
