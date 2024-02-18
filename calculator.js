const add = (a = 0, b = 0) => {
    console.log(a + b);
}

const sub = (a = 0, b = 0) => {
    console.log(a-b);
}

const mul = (a = 0, b = 0) => {
    console.log(a*b);
}

const div = (a = 1, b = 1) => {
    console.log(a/b);
}



module.exports = {
    addition : add,
    subtraction : sub,
    multiplication : mul,
    division : div
}