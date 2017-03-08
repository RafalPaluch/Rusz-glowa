/**
 * Created by rafal on 07.03.17.
 */
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess; // komórka wskazana przez uzytkownika
var guesses = 0; //ilosc prob

var hits = 0; // zmienna przechowujaca liczbę trafien

var isSunk = false; // zmienna informujaca czy statek zostal zatopiony

while (isSunk==false) {
    guess = prompt("Gotów, cel , pal(podaj liczbę z zakresu 0 do 6: ");
    if (guess <0 || guess > 6) {
        alert ("Proszę podać prawidłowy numer komórki!")
    } else {
        guesses +=1;


    if ( guess == location1 || guess == location2 || guess == location3){
        alert("trafiony!");
        hits +=1;




    if (hits === 3) {
        isSunk = true;
        alert("Zatopiłeś mój okręt!");
    } }
    else {
        alert("Pudło");
    }

}}


