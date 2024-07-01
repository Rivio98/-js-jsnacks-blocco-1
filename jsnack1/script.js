//creo l' array con dentro vari nomi degli invitati
const autorizzati = ["Luca", "Pippo", "Luigi", "Luigi", "Fabrizio", "Stefano", "Rivaldo"];


//creo un prompt dove chiedo il nome all'utente
const domanda = prompt('Come ti chiami?');

//crea una variabile di controllo per dirmi se il nome è presente o meno nell array
let controllo = false;

//ciclo l'array e confronto l'elemento che sto ciclando con la parola inserita dall'prompt
for (let i = 0; i < autorizzati.length; i++) {
    //se è vera la condizione imposto la variabile di controllo a true
    if (autorizzati[i].toLowerCase() == domanda) {
        controllo = true;
    }
}
// se la variabile è true il messaggio sarà : Accesso consentito!
if (controllo == true) {
    console.log(`${domanda.toLowerCase()} IL suo invito è valido!`);
}
else { //altrimenti : Accesso negato!
    console.log(`${domanda.toLowerCase()} Lei non è in lista!`);
}
