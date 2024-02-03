function createLibrary(libraryName) {
  library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [], 
      nonFiction: [], 
    }
  }
  return library
};

function addBook(libraryName, book){
for (var i = 0; i < Object.keys(libraryName.shelves).length; i++){
  if (Object.keys(libraryName.shelves)[i] === book.genre){
    libraryName.shelves[book.genre].push(book)
  }
 

}

}
// console.log(`this will show my shelves in library: `, libraryName.shelves)
// console.log(`this will show the length of the array of shelves: `, libraryName.shelves)

// console.log(`This will show the Object keys: `, Object.keys(libraryName.shelves));
// console.log(`This will show the Object keys length: `, Object.keys(libraryName.shelves).length)
// Object.keys(object).length will return keys in a string
// console.log(`this will show my book: `, book)
// console.log(`this will show my book's genre: `, book.genre)
//// <<
// <<<INITIAL ATTEMPT USING IF>>
// if (libraryName.shelves.includes(book.genre)){
//   libraryName.shelves[book.genre].push(book.genre)
// }

//I want to create a for look
//the loop will check every shelf
//every shelf[i] will see if it includes book.genre



// if library.shelves.includes(book.genre) 
// then insert 
// book into library.shelves.genre

// PARAMTER1: library = object.name
// PARAMETER2: book 
// ```book.genre``` should be inserted into ```library.shelves.matchingGenre``

// I think I need to see if shelves includes book.genre
//if library
// search "Includes" on shelves
// 


//addBook should add to fantasy function
//insert into: 
//     [OnlyObject].shelves.fantasy

function checkoutBook(){}

module.exports = {
  
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};


//library.shelves[genre].length