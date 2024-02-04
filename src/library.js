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
  if (book.genre === "fantasy"){
    libraryName.shelves.fantasy.push(book)
  } else if (book.genre === "fiction"){
    libraryName.shelves.fiction.push(book)
  } else if (book.genre === "nonFiction"){
    libraryName.shelves.nonFiction.push(book)
  }
return libraryName
}

// for (var i = 0; i < Object.keys(libraryName.shelves).length; i++){
//   if (Object.keys(libraryName.shelves)[i] === book.genre){
//     libraryName.shelves[book.genre].push(book)
//   }
// }

function checkoutBook(libraryName, title, genre){  
  for(var i = 0; i < libraryName.shelves[genre].length; i++){
    if (title === libraryName.shelves[genre][i].title){ 
      libraryName.shelves[genre].splice(i,1)
      console.log(`this will show the updated library: `, libraryName)
      return `You have now checked out ${title} from the ${libraryName.name}.`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}.`
}

function takeStock(libraryName, genre){
 var stockBook = []
 var totalStock = libraryName.shelves.fiction.length + libraryName.shelves.nonFiction.length + libraryName.shelves.fantasy.length
  if (genre){
      for(var i = 0; i < libraryName.shelves[genre].length; i++){
        stockBook.push(libraryName.shelves[genre][i].title)
    }
    return `There are a total of ${libraryName.shelves[genre].length} ${genre} books at the ${libraryName.name}.`
  } else {
return `There are a total of ${totalStock} books at the ${libraryName.name}.`
  }
}


module.exports = {
  
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};

    
    // {
    // console.log(`!!!!!THIS CONFIRMS WE HAVE A MATCH ON GENRES!!!!!`, genre);
///^^^^^ this is searching through [fantasy, fiction, non-fiction]
//we are asking 
/// confirm the genre
/// find the title inside the genre
// remove the book

  




    // 
  //     libraryName.shelves[book.genre].splice(, 1)
//   For (i = 0; i < `WE DONT KNOW`; i++){
//   if (sciFiShelf[i].title === bookTitle){
//     sciFiShelf.splice(i, 1)

// if title === libraryName.shelfIndex.title, 

// we need to access genre first

// then we need to access the name

// libraryName
// shelf[i]
// genre[i]





 
  // console.log( `this will show the library: `, library)

// addBook(denverLibrary, dracula);
// assert.deepEqual(denverLibrary.shelves, {fantasy: [dracula], fiction: [], nonFiction: [bornACrime]});;

  // console.log(`this will show the collection of the new library: `, collectionLibrary)
  
  
  // 1) we probably want to use the addBook function to create a new library
  // 2) We want


//we want to remove a book from a shelf
//




//library.shelves[genre].length

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