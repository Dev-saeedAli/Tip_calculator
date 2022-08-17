// selectors
const form = document.querySelector(".Form");
const tipBtn = document.querySelectorAll(".btn__tip");
const customInput = document.querySelector(".btn__custom");
const resetBtn= document.querySelector(".btn__reset");
let tipPercent;


// events
form.addEventListener("submit", submitForm)

// looping through all btns and removing and adding active class.
tipBtn.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        tipBtn.forEach(btn => btn.classList.remove('active'));
        customInput.classList.remove("active")
        btn.classList.add("active");
        tipPercent = e.target.textContent.slice(0, - 1)
    })
})

customInput.addEventListener("click", ()=>{
    tipBtn.forEach(btn => btn.classList.remove("active"))
    customInput.classList.remove("active")
})

resetBtn.addEventListener("click", ()=>{
    resetForm()
})

// submitting form
function submitForm(e) {
    e.preventDefault()
    const tipAmountPrice = document.querySelector(".tip__amount__screen");
    const tipTotalPrice = document.querySelector(".tip__total__screen");
    const billInput = document.querySelector("#bill__input");
    const customInput = document.querySelector(".btn__custom");
    const noOfPeople = document.querySelector(".no-of-people").value;
    const errorMessage = document.querySelector(".error-message");
    const noOfPeopleContainer = document.querySelector(".no__of__people__container");
    const screenInput= document.querySelector(".screen");
    
    
    let tipAmount = 0;
    let total;
    if(billInput.value == ""){
        screenInput.classList.add("active")
    }else{
        screenInput.classList.remove("active")
    }
    if (noOfPeople === "" || noOfPeople === 0){
        noOfPeopleContainer.classList.add("active")
        errorMessage.classList.remove("none")
        if(tipAmount <= 0 ){
            customInput.classList.add("active")
        }
    }else{
        customInput.value !== "" ?  tipAmount = (customInput.value / +noOfPeople).toFixed(2) :  tipAmount = (tipPercent / +noOfPeople).toFixed(2)
        total = ((+billInput.value  / +noOfPeople) + +tipAmount).toFixed(1)
        tipAmountPrice.textContent = "$" + tipAmount;
        tipTotalPrice.textContent = "$" + total
        noOfPeopleContainer.classList.remove("active")
        customInput.classList.remove("active")
        errorMessage.classList.add("none")
        screenInput.classList.remove("active")
        
    }
}

// reset all forms
const resetForm = () =>{
    const errorMessage = document.querySelector(".error-message");
    const tipAmountPrice = document.querySelector(".tip__amount__screen");
    const tipTotalPrice = document.querySelector(".tip__total__screen");
    const noOfPeopleContainer = document.querySelector(".no__of__people__container");
    const screenInput= document.querySelector(".screen");
    let noOfPeople = document.querySelector(".no-of-people");
    const billInput = document.querySelector("#bill__input");

    tipAmountPrice.textContent = "$0.00"
    tipTotalPrice.textContent = "$0.00"
    tipBtn.forEach(btn => btn.classList.remove("active"))
    billInput.value = ""
    customInput.classList.remove("active")
    errorMessage.classList.add("none")
    noOfPeople.value = ""
    noOfPeopleContainer.classList.remove("active")
    screenInput.classList.remove("active")
}