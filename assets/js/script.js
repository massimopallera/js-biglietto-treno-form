const price_x_Km = 0.21


const formEl = document.querySelector('form')

formEl.addEventListener('submit', function(e) {
    e.preventDefault()

    const userName = e.target.userName.value;
    const km = e.target.km.value;
    const age = e.target.age.value;
    console.log(userName);
    console.log(km);
    console.log(age);
    
    console.log(discount(price_x_Km, km, age))
})


//price is just the price for a km
//x is the amout of km to do
//age will not be a number


function discount(price, x, age){
    
    let total = price*x
    // let actual_price = total

    switch(age){
        case 'over':
            // apply discount 
            // ⬇️ for over65 → totalPrice*40/100
            total -= (total*40/100)//discount 
            // total *= 40/100 
            break
        case 'less':
            //apply discount
            // ⬇️ for less18 → totalPrice*20/100
            total -= (total*20/100) 
            break
    }

    return Math.round(total * 100) / 100;
}