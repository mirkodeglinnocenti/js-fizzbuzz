// console.log('Ciao Funziona')


// stampare in console i numeri da 1 a 100

for (let i = 1; i <= 100 ;  i++) {

    // console.log(i);

    // RESTO
    let restoTre = i % 3;
    let restoCinque = i % 5;

    // per i multipli di entrambi ovvero i multipli di 15 stampare FizzBuzz al posto del numero
    if (restoTre === 0 && restoCinque === 0){

        console.log('FizzBuzz')

    // per i multipli di 3 stampare Fizz al posto del numero  
    } else if (restoTre === 0) {
        console.log('Fizz');

    // per i multipli di 5 stampare Buzz al posto del numero
    } else if(restoCinque === 0) {
        console.log('Buzz');

    // stampa tutti gli altri numeri
    } else {
        console.log(i)
    }


}




