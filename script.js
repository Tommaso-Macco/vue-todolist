// Rifare l’esercizio della to do list:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// ATTENZIONE PERO’!!!!
// Mi comunicano ora dalla regia che lo variamo un attimo,
// la vostra variante sarà che:
// il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
// gli oggetti avranno questo formato:
// { text: 'Fare la spesa', done: true }, 
// { text: 'Fare il bucato', done: false }
// etc. etc..


var app = new Vue({
    el: '#app',
    data: {
        newTaskValue: "",
        tasks: [
            {
                task: "Fare la spesa",
                done: "true"
            },
            {
                task: "Andare a correre",
                done: "true"
            },
            {
                task: "Programmare l'esercizio di Boolean",
                done: "false"
            },
            {
                task: "Preparare pranzo",
                done: "false"
            },
            {
                task: "Andare in palestra",
                done: "false"
            },
            {
                task: "Organizzare il weekend",
                done: "true"
            },
      ],
    },
    methods: {
        addElement: function(){
            this.tasks.push(this.newTaskValue)
        }
    }
  })