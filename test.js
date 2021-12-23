function somme(params) {
    let total = 0;
    for(let i = 0; i < params.length ; i++){
        total += params[i]
    }
    return total;
}
console.log(somme([2,7,5]));