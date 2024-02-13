const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTreat = document.querySelector("#addTreat");
buttonTreat.addEventListener("click", showTreat);

function showTreat(e) {
    e.preventDefault();
    treat.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const billDog = Number(document.querySelector("#billDog").value);
    const billCat = Number(document.querySelector("#billCat").value);
    const people = Number(document.querySelector("#people").value);
    const treat = Number(document.querySelector("#treat").value);
    if(billCat === "" || billDog === "" || people === "" || people < 1){
        Swal.fire({
            title: 'Error',
            text: 'Please enter your information!',
            imageUrl: 'https://images.unsplash.com/photo-1602979677071-1781b7f40023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
        })
        return false;
    }
    let amountPerPerson = (billCat + billDog)/people;
    let treatPerPerson = ((billCat + billDog)*treat)/people;
    let totalSum = amountPerPerson + treatPerPerson;
    
    amountPerPerson = amountPerPerson.toFixed(2);
    treatPerPerson =treatPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTreat").textContent = treatPerPerson;
    document.querySelector("#billAndTreat").textContent = totalSum;
}