const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
};

function destructivelyPrependCat(name){
    cats.unshift(name);
};

function destructivelyRemoveLastCat(){
    cats.pop();
};

function destructivelyRemoveFirstCat(name){
    cats.shift();
};

function appendCat(name){
    const newCatList = [...cats, name];
    return newCatList;
};

function prependCat(name){
    const newCatList = [name, ...cats];
    return newCatList;
};

function removeLastCat(){
    return cats.slice( 0, cats.length - 1);
};

function removeFirstCat(){
    return cats.slice( 1, cats.length);
};