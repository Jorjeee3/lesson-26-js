

//--------------------TASK-1---------------------

let pruductList = [
    {
        name: "Bread",
        amount: 2,
        isBought: false,
    },
    {
        name: "Egg",
        amount: 15,
        isBought: true,
    },
    {
        name: "Mashroom",
        amount: 6,
        isBought: false,
    },
];

function renderProducts() {
    let sortedPruductList = pruductList.sort((a, b) => {
        return a.isBought - b.isBought
    });
    console.log(sortedPruductList)
}

function addProduct(name) { 
    console.log('add product')
    let productAlreadyExists = false;
    for (let product of pruductList) {
        if (product.name === name) {
            product.amount ++;
            productAlreadyExists = true;
        } 
    } 

    if (productAlreadyExists === false) {
        pruductList.push({
            name, amount: 1, isBought: false,
        });
    }
}   

renderProducts()

addProduct("Water")
addProduct("Mashroom")

renderProducts()

// КОД НЕ ПРВИЛЬНО ВЫПОЛНЯЕТСЯ, НЕ МОГУ ПОНЯТЬ ПОЧЕМУ



















//--------------------TASK-2---------------------



//--------------------TASK-3---------------------




//--------------------TASK-4---------------------



//--------------------TASK-5---------------------




//--------------------TASK-6---------------------

//--------------------TASK-7---------------------   