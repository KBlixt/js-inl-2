/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;

function taskOne() {
  const taskOneDiv = document.getElementById("answer-one")
  if (!blue){
    taskOneDiv.style.background = 'blue'
  }else{
    taskOneDiv.style.background = 'white'
  }
  blue = !blue
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  numbers.push(Math.floor(Math.random()*1000))

  const taskTwoDiv = document.getElementById("answer-two")
  taskTwoDiv.textContent = ""
  for (let number of numbers) {
    taskTwoDiv.textContent += number + " "
  }
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  if([0,6].includes(new Date().getDay())){
    alert("Woohooo it's weekend")
  }else{
    alert("FML");
  }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
  if (typeof valueOne == "number" && typeof valueTwo == "number"){
    alert("Produkten är: " + valueOne * valueTwo)
  }else{
    alert("Jag kan bara multiplicera nummer.");
  }
}

function taskFour() {
  multiplier(4,'six');
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  for (let fruit of fruits){
    if (['apelsin', 'päron'].includes(fruit)){
      trash.push(fruit)
    }else {
      eatable.push(fruit)
    }
  }
  const eatableText = 'Ätligt:'.bold() + ' ' + eatable.toString().replaceAll(',', ', ')
  const trashText = 'Skräp:'.bold() + ' ' + trash.toString().replaceAll(',', ', ')

  const taskFiveDiv = document.getElementById("answer-five")
  taskFiveDiv.innerHTML = '<p>' + eatableText + '</br>' + trashText + '</p>'
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];


const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  for (let person of persons){
    person.age < 30 ?
        underThirty.push(person.name):
        overThirty.push(person.name)

    person.married ?
        married.push(person.name):
        notMarried.push(person.name)
  }

  const over30text = 'Över 30:'.bold() + ' ' + overThirty.toString().replaceAll(',', ', ')
  const under30text = 'Under 30:'.bold() + ' ' + underThirty.toString().replaceAll(',', ', ')
  const marriedText = 'Gift:'.bold() + ' ' + married.toString().replaceAll(',', ', ')
  const notMarriedText = 'Ogift:'.bold() + ' ' + notMarried.toString().replaceAll(',', ', ')

  const taskSixDiv = document.getElementById("answer-six")
  taskSixDiv.innerHTML = '<p>' + over30text + '</br>' + under30text + '</br>' + marriedText + '</br>' + notMarriedText + '</p>'

}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";


function taskSeven() {
  const content = addMeSomeLineBreaks.split(", ")

  const taskSevenDiv = document.getElementById("answer-seven")
  for (let line of content){
    taskSevenDiv.innerHTML += line + '</br>'
  }
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/


function taskEight() {
  const taskEightCard = document.getElementById("card-eight")

  taskEightCard.style.visibility = "hidden"
  setTimeout(() => taskEightCard.style.visibility = 'visible', 3000)
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

const answerContainers = document.getElementsByClassName("answer-container")
function taskNine() {
  const answerContainers = document.getElementsByClassName("answer-container")

  const targetElements = []
  for (let answerContainer of answerContainers){
    if (answerContainer.tagName === "div"){}
      targetElements.push(answerContainer)
  }

  const newColour = new Date().getHours() < 17? "red": "blue"

  targetElements.forEach(element => element.style.background = newColour)

}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  if (typeof valueOne != "number" || typeof valueTwo != "number"){
    return "Något är fel."
  }

  let result = "Resultat: "
  switch (operator){
    case "add": return result + (valueOne + valueTwo)
    case "subtract": return result + (valueOne - valueTwo)
    case "multiply": return result + (valueOne * valueTwo)
    case "divide": return result + (valueOne / valueTwo)
    default: return "Något är fel."
  }
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  alert(calculator(420,0,'divide'));
}
