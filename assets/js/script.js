
const price_x_Km = 0.21
const formEl = document.querySelector('form')


formEl.addEventListener('submit', function(e) {
    e.preventDefault()

    const userName = e.target.userName.value;
    const km = e.target.km.value;
    const age = e.target.age.value;
    
    if(km<=0 || !km || !userName){
        alert('Errore. Inserisci o correggi tutti i dati');
        return;
    }

    let discount = calcDiscount(price_x_Km, km, age)

    console.log(`Name: ${userName} \nKilometers: ${km}\nAge: ${age}\nPrice: ${discount}`);
})


//price is just the price for a km
//x is the amout of km to do
//age will not be a number
function calcDiscount(price, x, age){
    
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