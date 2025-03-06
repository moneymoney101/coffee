
let pancakeOrderButtonHTML = document.getElementById("pancakeOrderButton")
pancakeOrderButtonHTML.addEventListener("click", function() {

    //These lines (7 - 11) create a new order element using the document variable (lines 17 - 19 is an order element)
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "pancakes.png"
    orderElementDiv.appendChild(orderElementImage)
    
    
    let readyButton = document.createElement("button")
    readyButton.innerHTML = "Ready"
    orderElementDiv.appendChild(readyButton)
    readyButton.addEventListener("click", function() {
        orderElementDiv.remove()
    })
    

    //👇PART 2 CODE SNIPPET HERE👇

    
    //This line select the orders div and save it to a variable
    let ordersHTML = document.getElementById("orders")
    //This line inject the new order element into the orders div using innerHTML
    ordersHTML.appendChild(orderElementDiv)

    
// This line select the orders div and save it to a variable
ordersHTML.appendChild(orderElementDiv); 
   
// This line inject the new order element into the orders div using innerHTML
    
})



let coffeeOrderButtonHTML = document.getElementById("coffeeOrderButton")
coffeeOrderButtonHTML.addEventListener("click", function() {
    //*** YOUR JAVASCRIPT CODE HERE *** 
    let orderElementDiv = document.createElement("div")
    orderElementDiv.className = "order"
    let orderElementImage = document.createElement("img")
    orderElementImage.src = "coffee.png"
    orderElementDiv.appendChild(orderElementImage) 
    let ordersHTML = document.getElementById("orders")
    ordersHTML.appendChild(orderElementDiv)

    let readyButton = document.createElement("button")
    readyButton.innerHTML = "Ready"
    orderElementDiv.appendChild(readyButton)
    readyButton.addEventListener("click", function() {
        orderElementDiv.remove()
    })
})







//  Mutli-Step buttons Form

let pancakeMultiButton = document.getElementById("pancakeOrderButtonTwo")
pancakeMultiButton.addEventListener("click", function() {
    for (let index = 0; index < 2; index++) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "pancakes.png"
        orderElementDiv.appendChild(orderElementImage)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)
        let readyButton = document.createElement("button")
        readyButton.innerHTML = "Ready"
        orderElementDiv.appendChild(readyButton)
        readyButton.addEventListener("click", function() {
            orderElementDiv.remove()
        })
        
    }
})

let coffeeMultiButton = document.getElementById("coffeeOrderButtonTwo")
coffeeMultiButton.addEventListener("click", function() {  
    for (let index = 0; index < 2; index++) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "coffee.png"
        orderElementDiv.appendChild(orderElementImage)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)
        let readyButton = document.createElement("button")
        readyButton.innerHTML = "Ready"
        orderElementDiv.appendChild(readyButton)
        readyButton.addEventListener("click", function() {
            orderElementDiv.remove()
        })
    }
})









// inupt form




let pancakeInputButton = document.getElementById("pancakeOrderSubmit")
pancakeInputButton.addEventListener("click", function() {
    let pancakeInput = document.getElementById("pancakeOrderInput").value
    let pancakeInputs = pancakeInput
    for (let index = 0; index < pancakeInputs; index++) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "pancakes.png"
        orderElementDiv.appendChild(orderElementImage)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)
        let readyButton = document.createElement("button")
        readyButton.innerHTML = "Ready"
        orderElementDiv.appendChild(readyButton)
        readyButton.addEventListener("click", function() {
            orderElementDiv.remove()
        })
    }
})



let coffeeInputButton = document.getElementById("coffeeOrderSubmit")
coffeeInputButton.addEventListener("click", function() {
    let coffeeInput = document.getElementById("coffeeOrderInput").value
    let coffeeInputs = coffeeInput
    for (let index = 0; index < coffeeInputs; index++) {
        let orderElementDiv = document.createElement("div")
        orderElementDiv.className = "order"
        let orderElementImage = document.createElement("img")
        orderElementImage.src = "coffee.png"
        orderElementDiv.appendChild(orderElementImage)
        let ordersHTML = document.getElementById("orders")
        ordersHTML.appendChild(orderElementDiv)
        let readyButton = document.createElement("button")
        readyButton.innerHTML = "Ready"
        orderElementDiv.appendChild(readyButton)
        readyButton.addEventListener("click", function() {
            orderElementDiv.remove()
        })
    }
})