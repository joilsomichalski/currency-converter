let form = document.getElementById("converterForm")
let amount = document.getElementById("amount")
let fromCurrency = document.getElementById("fromCurrency")
let toCurrency = document.getElementById("toCurrency")
let convertedAmount = document.getElementById("convertedAmount")
let loading = document.querySelector(".loading")
let result = document.querySelector("result")
let error = document.querySelector("error")

const API_URL = "https://api.exchangerate-api.com/v4/latest/"

async function convertMoney(){
    loading.style.display = "block"



try{
    const response = await fetch(API_URL + fromCurrency.value)
    const data = await response.json()

    const rate = data.rates[toCurrency.value]
    const convertedValue = (amount.value * rate).toFixed(2)

    convertedAmount.value = convertedValue
        
    result.innerHTML = `
        <div> 
            ${amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}
        </div>
    `

}

catch(error){
    alert("Falha no SERVIDOR")
}

}

form.addEventListener("submit", function(event){
    event.preventDefault()
    convertMoney()
})