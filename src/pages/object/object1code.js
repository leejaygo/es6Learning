export const code1 = 'var foo = 1;var obj = { foo: foo }'

export const code2 = 'var foo = 1;var obj = { foo }'

export const code3 = 'var a = "a";var b = "b";var obj = {};obj[a+b] = 1'

export const code4 = 'var a = "a";var b = "b";var obj = {\n    [a+b]: 1\n}'

export const code5 = 'let keys = [];const obj = { a: 1, b: 2 };for(let key in obj){\n   keys.push(key) }'

export const code6  = 'const obj = { a: 1, b: 2 }; let keys = Object.keys(obj)'