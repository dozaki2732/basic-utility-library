function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}

function subtract(subtract1, subtract2) {
   // R: subtracting the first v fromt he second v
   return subtract2 - subtract1;
}

function multiply(mult1, mult2) {
   // R: multiplied the two var
   return mult1 * mult2;
}

function divide(numerator, denominator) {
   // R: numerator is divided by the denominator
   return numerator / denominator;
}

function increment(number) {
   // R: increment number by 1
   number++;
   return number;
}

function decrement(number) {
   // R: increment number by 1
   number--;
   return number;
}

function multiply(decimal1, decimal2) {
   // R: multiplied the two decimals
   return decimal1 * decimal2;
}

function divide(decimal1, decimal2) {
   // R: the first decimal is divided by the second decimal
   return decimal1 / decimal2;
}

function concatenate(string1, string2) {
   // R: concatenate the two strings
   return string1 + " " + string2;
}

function concatenate(string1, string2) {
   // R: concatenate the two strings using +=
   return (string1 += string2);
}

function construct(beer) {
   // add the input into the string
   return "My favorite beer is " + beer + ", and I love it deeply. ";
}

function measure(word1) {
   // measure the length of characters in this word
   return word1.length;
}

function find(word1) {
   // R: the first letter of the word
   return word1[0];
}

function find(word1) {
   // R: the fifth letter of the word
   return word1[4];
}

function push(beer) {
   // R: push the word onto the list
   beerlist = [" Modelo", " Asahi", " Kirin"];
   beerlist.push(" " + beer);
   return beerlist;
}

function pop(beer) {
   // R: push the word from the list
   beerlist = ["Modelo", " Asahi", " Kirin", " Pacifico"];
   beerlist.pop();
   beerlist.push(beer);
   return beerlist;
}

function shift(foodItem) {
   // R: shift the word font the list
   foodList = ["eggs", " coffee", " cherries", " snacks"];
   foodList.shift();
   foodList.push(foodItem);
   return foodList;
}
function unshift(foodItem) {
   // R: shift the word font the list
   foodList = ["eggs", " coffee", " cherries", " snacks"];
   foodList.unshift();
   foodList.push(foodItem);
   return foodList;
}

function list(foodItem) {
   // R: added item to list
   shoppingList = [
      ["beer", 3],
      ["lettuce", 2],
      ["soap", 4],
   ];
   shoppingList.push(foodItem);
   return shoppingList;
}

function stand(yourItem) {
   // R: queue your item
   listForLine = ["noodles", "beer", "eggs", "fruit"];
   listForLine.push(yourItem);
   listForLine.shift();

   return listForLine;
}
