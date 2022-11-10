const inputCash = document.getElementById('input-cash');
const btn5 = document.getElementById('button-5');
const btn10 = document.getElementById('button-10');
const btn15 = document.getElementById('button-15');
const btn25 = document.getElementById('button-25');
const btn50 = document.getElementById('button-50');
const inputPeople = document.getElementById('input-people');
const pError = document.getElementById('p-error');
const inputRandom = document.getElementById('input-random');
const tipAmount = document.getElementById('h3-amount');
const total = document.getElementById('h3-total');
const checkTotal = document.getElementById('button-check');

btn5.addEventListener('click',()=>{calculate(5),inputRandom.value=''})
btn10.addEventListener('click',()=>{calculate(10),inputRandom.value=''})
btn15.addEventListener('click',()=>{calculate(15),inputRandom.value=''})
btn25.addEventListener('click',()=>{calculate(25),inputRandom.value=''})
btn50.addEventListener('click',()=>{calculate(50),inputRandom.value=''})

const calculate= (percent)=>{
    let cash = inputCash.value
    return result = cash*(percent/100)
}

const validCustom =(random)=>{
    if(random!='')calculate(random)
}

const renderResult =()=>{
    let people = inputPeople.value
    let random = inputRandom.value
    validCustom(random)
    let fixedResult = result/people
    tipAmount.innerHTML=`$${fixedResult.toFixed(2)}`
    total.innerHTML=`$${result.toFixed(2)}`
}

const showError = ()=>{
    pError.innerHTML=`Can't be zero`
    inputPeople.style.border='2px solid red'
    setTimeout(()=>{
        pError.innerHTML='',
        inputPeople.style.border='none'
    },2000)
}

checkTotal.addEventListener('click',()=>{
    inputPeople.value!=0?renderResult():showError()
})

