/* eslint - env browser*/
//STEP 1
var myMovies = ["The Shawshank Redemption", "The Godfather", "Schindler's List", 
                        "Raging Bull" , "Casablanca", "Die Hard", "Taken"];
window.console.log(myMovies[1]);
//STEP 2
var movies = Array(5);
var i;
for (i =0; i < 5; i += 1) {
    movies[i] = myMovies[i];
};
window.console.log(movies[0]);
//STEP 3
movies.splice(2,0,"Forrest Gump");
window.console.log(movies.length);
//STEP 4
movies = [];
for (i =0; i < 5; i += 1) {
    movies[i] = myMovies[i];
};
movies.shift();
window.console.log(movies);
//STEP 5
movies = [];
for (i =0; i < 7; i += 1) {
    movies[i] = myMovies[i];
    window.console.log(myMovies[i]);
};
//STEP 6
window.console.log("\n");
for (item in myMovies) {
    window.console.log(myMovies[item]);
};
//STEP 7
window.console.log("\n");
movies.sort();
for (items in movies) {
    window.console.log(movies[items]);
};
//STEP 8
var leastFavMovies = ["Titanic", "300", "Game"];
window.console.log("\nMoives I like \n");
for (item in myMovies) {
    window.console.log(myMovies[item]);
};
window.console.log("\nMovies I don't like\n");
for (item in leastFavMovies) {
    window.console.log(leastFavMovies[item]);
};
//STEP 9
var allMovies = myMovies.concat(leastFavMovies);
allMovies.sort();
allMovies.reverse();
window.console.log("\n");
for (item in allMovies) {
    window.console.log(allMovies[item]);
};
//STEP 10
window.console.log("\n" + allMovies[allMovies.length-1]);

