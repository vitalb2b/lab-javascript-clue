//const suspectsArray = [];
 const suspectsArray = [
     {
         firstName: 'Jacob',
         lastName: 'Green',
         occupation: 'Entrepeneur',
         age: '25',
         description: 'tall guy',
         image: 'cat',
         color: 'blue' 
     },
     {
         firstName: 'Maria',
         lastName: 'da Silva',
         occupation: 'Astronaut',
         age: '34',
         description: 'clever',
         image: 'dog',
         color: 'red' 
     },
     {
         firstName: 'Jose',
         lastName: 'Santos',
         occupation: 'Pumbler',
         age: '17',
         description: 'short guy',
         image: 'elephant',
         color: 'pink' 
     },
     {
         firstName: 'Delirio',
         lastName: 'Black',
         occupation: 'Hunter',
         age: '14',
         description: 'crazy dude',
         image: 'dragon',
         color: 'black' 
     },
     {
         firstName: 'Relampago',
         lastName: 'Marquinhos',
         occupation: 'Uber driver',
         age: '40',
         description: 'lazy',
         image: 'car',
         color: 'red' 
     },
     {
         firstName: 'Chiquinho',
         lastName: 'Boa Praça',
         occupation: 'Drug dealer',
         age: '38',
         description: 'calm and gentle',
         image: 'seal',
         color: 'verde' 
     }

 ];

 // Rooms Collection
 //const roomsArray = [];
 const roomsArray = [
     {
         name: 'sala-de-estar',
     },
     {
         name: 'quarto',
     },
     {
         name: 'cozinha',
     },
     {
         name: 'suite14',
     },
     {
         name: 'banheiro',
     },
     {
         name: 'lavabo',
     },
     {
         name: 'edicula',
     },
     {
         name: 'jardim',
     },
     {
         name: 'sacada',
     },
     {
         name: 'escritorio',
     },
     {
         name: 'sala-de-jantar',
     },
     {
         name: 'academia',
     },
     {
         name: 'salao-de-festas',
     },
     {
         name: 'salao-de-jogos',
     },
     {
         name: 'sauna',
     },
 ];

 // Weapons Collection
 //const weaponsArray = [];
 const weaponsArray = [
     {
         name: 'AK-47',
         weight: '47kg'
     },
     {
         name: 'faca',
         weight: '100kg'
     },
     {
         name: 'machado',
         weight: '3g'
     },
     {
         name: 'punhal',
         weight: '10kg'
     },
     {
         name: 'espada',
         weight: '150kg'
     },
     {
         name: 'glock',
         weight: '200kg'
     },
     {
         name: 'desert-eagle',
         weight: '1kg'
     },
     {
         name: 'assault-rifle',
         weight: '2kg'
     },
     {
         name: 'soco-ingles',
         weight: '1000kg'
     }
 ];

 // const cardType = [suspectsArray, weaponsArray, roomsArray];
 // ITERATION 2


 function selectRandom(firstArray){
     let firstRandomNumber = 0;

     // for(let i = 0; i<firstArray.length; i++){
         
         firstRandomNumber = Math.round(Math.random() * firstArray.length);
         //firstRandomNumber = firstArray[firstRandomNumber];
    
         return firstRandomNumber;
 }
 

 function pickMystery(){
     
    var cards =
        {
            suspect: selectRandom(suspectsArray),
            weapon: selectRandom(weaponsArray),
            room: selectRandom(roomsArray),
     } 
    
    return cards;

 }

    //console.log(pickMystery());

// ITERATION 3


function revealMystery(envelope){


    console.log(`${suspectsArray[envelope.suspect].firstName} ${suspectsArray[envelope.suspect].lastName} 
    killed Mr. Boddy using the ${weaponsArray[envelope.weapon].name} in the ${roomsArray[envelope.room].name}!`);

}

revealMystery(pickMystery());