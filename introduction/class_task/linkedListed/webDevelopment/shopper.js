function createRowElements(){
    return{
        shoppingCart: document.getElementsByTagName("tbody")[0],
        newRow: document.createElement("tr"),
        newItem: document.createElement("td"),
        itemPrice:document.createElement("td"),
        removeButton: document.createElement("button"),
        calculateTotalButton: document.createElement("button")

    }
}

function getUserInput(){
    item = document.getElementById("item");
    price = document.getElementById("price");
    totalprice = document.getElementById("totalprice");

    return{
        item, price, totalprice
    }
}

function addToCart(){
    let {item, price, totalprice} = getUserInput();

    if(item.value !== "" && price.value !== ""){
        let{newRow, shoppingCart, newItem, itemPrice, removeButton, calculateTotalButton} = createRowElements();
        

        newItem.innerText = item.value;
        itemPrice.innerText = price.value;
        calculateTotalButton.innerText = totalprice.value;

        newRow.appendChild(newItem)
        newRow.appendChild(itemPrice)
        shoppingCart.appendChild(newRow)

        item.value = "";
        price.value = "";


    }
}

function removeFromCart(){
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    const rows = shoppingCart.getElementsByTagName("tr");

    if(rows.length > 0){
        shoppingCart.removeChild(rows[rows.length - 1])
    }
}

function addTotal(){
    const shoppingCart = document.getElementsByTagName("tbody")[0];
    const row = shoppingCart.getElementsByTagName("tr");

    if(row.length > 0){
        shoppingCart.addEventListener(row.length[row.length + 1])
    }
}

