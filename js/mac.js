//memory,storage,delivery cost

function productCost(product,price){
   let productCostId = document.getElementById(product + '-cost')
   productCostId.innerText = price;
   totalCalculation()
}

//costPrice
function priceCalculation(product){
    let cost = document.getElementById(product + '-cost')
    let newCost = parseInt(cost.innerText)

    return newCost;
}
//total price calculation
function totalCalculation(){
    let baseCost=  priceCalculation('base')
    let memoryCost = priceCalculation('memory')
    let storageCost = priceCalculation('storage')
    let deliveryCost = priceCalculation('delivery')
    let addTotal = baseCost + memoryCost + storageCost + deliveryCost;

    let totalCost = document.getElementById('total-cost');
    totalCost.innerText = addTotal;
 
    
    let afterDiscountTotal = document.getElementById('after-discount-total');
    afterDiscountTotal.innerText = addTotal;

    //we can easyli done it by this way:::::::
    // let baseCost = document.getElementById('base-cost').innerText;
    // let memoryCost = document.getElementById('memory-cost').innerText;
    // let storageCost = document.getElementById('storage-cost').innerText;
    // let deliveryCost = document.getElementById('delivery-cost').innerText;
    // let totalCost = document.getElementById('total-cost');

    // totalCost.innerText = parseInt(baseCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost)
}
//memory cost update

document.getElementById('extra-memory').addEventListener('click',function(){
    productCost('memory',60)
})
document.getElementById('default-memory').addEventListener('click',function(){
    productCost('memory',0)
})
//storage cost update

document.getElementById('default-storage').addEventListener('click',function(){
    productCost('storage',0)
})
document.getElementById('extra-storage').addEventListener('click',function(){
    productCost('storage',50)
})
document.getElementById('double-extra-storage').addEventListener('click',function(){
    productCost('storage',100)
})
//delivery cost update

document.getElementById('free-delivery').addEventListener('click',function(){
    productCost('delivery',0)
})
document.getElementById('cost-delivery').addEventListener('click',function(){
    productCost('delivery',20)
})

//promo code check

function promoCodeCheck(code){
    let discInput = document.getElementById('discount-input')
    let inputValue = discInput.value;
    let total = document.getElementById('after-discount-total');
    let totalValue = total.innerText;
    if(inputValue.toLowerCase() == code.toLowerCase()){
        total.innerText = parseInt(totalValue) - parseInt((totalValue / 10));
        document.getElementById('success-notify').style.display = 'block'

       
    }else{
        document.getElementById('success-notify').style.display = 'none'
    }
    discInput.value = '';
}
document.getElementById('discount-button').addEventListener('click',function(){
   promoCodeCheck('stevekaku');
})