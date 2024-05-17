
let mixArray = (array) => {
    const b = [];
    let aLength = array.length;
    for (let i = 0; i < aLength; i++) {
        let k = Math.floor(Math.random() * array.length);
        b.push(array[k]);
        array.splice(k, 1);
    }
    return b;
}

module.exports = {
    mixArray: mixArray
}