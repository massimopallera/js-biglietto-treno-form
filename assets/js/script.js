
const price_x_Km = 0.21
const formEl = document.querySelector('form')
const ticketsTable = document.getElementById('tickets')
const container = document.getElementById('ticket-container')

let i = 0 //to give an id for every ticket 

formEl.addEventListener('submit', function(e) {
    e.preventDefault()

    const userName = e.target.userName.value;
    const km = e.target.km.value;
    const age = e.target.age.value;
    
    if(km<=0 || !km || !userName){
        alert('Errore. Inserisci o correggi tutti i dati');
        return;
    }
    
    i += 1
    container.style.display = 'block'
    let price = calcDiscount(price_x_Km, km, age)
    console.log(`Name: ${userName} \nKilometers: ${km}\nAge: ${age}\nPrice: ${price}`);

    const newTicket = `
    <tr id="ticket_${i}">
        <td scope="row" class="ticketName">${userName}</td>
        <td class="ticketType text-right">${ticketType(age)}</td>
        <td class="carrozza">${Math.floor((Math.random()*10) + 1)}</td>
        <td class="CP">${Math.floor((Math.random()*10000) + 1)}</td>
        <td class="ticketPrice">${price}€</td>
   </tr>
    `

    ticketsTable.innerHTML += newTicket
})


/**
 * 
 * @param {String} value 
 * @returns 
 */
function ticketType(value){

    let str = 'Standard'

    switch (value){
        case 'over':
            str = 'Over'
        case 'less':
            str = 'Less'
        }

    return `Offerta ${str}`
}


/**
 * @param {Number} price - price per kilometer
 * @param {Number} x     - kilometers
 * @param {String} age   - not a number, its value should be over,less or default
 * @returns 
 */
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