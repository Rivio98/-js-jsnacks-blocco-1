//creo un array vuoto che contenga i numeri dispari

let oddNumbers = [];

//ciclo un prompt che chiede 6 numeri da inseire 

for (let i = 0; i < 6; i++) {

    //creo il prompt
    let userNumber = prompt('inserisci un numero');

    // converto il valore inserito dall utenter nel prompt in un numero
    let number = Number(userNumber);

    //controllo se in numero inserito è dispari
    if (number % 2 != 0) {
        //se è dispari lo aggiungo all array
        oddNumbers.push(number);
        console.log(oddNumbers)
    }
}