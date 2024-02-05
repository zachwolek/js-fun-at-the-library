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
  libraryName.shelves[book.genre].push(book)
  return libraryName
}

function checkoutBook(libraryName, title, genre){  
  for(var i = 0; i < libraryName.shelves[genre].length; i++){
    if (title === libraryName.shelves[genre][i].title){ 
      libraryName.shelves[genre].splice(i,1)
      // console.log(`this will show the updated library: `, libraryName)
      return `You have now checked out ${title} from the ${libraryName.name}.`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}.`
}

function takeStock(libraryName, genre){
  if (genre === undefined){
    var stockLib = 0;
    for (var i = 0; i < Object.values(libraryName.shelves).length; i++){
      stockLib += Object.values(libraryName.shelves)[i].length
    }
 return `There are a total of ${stockLib} books at the ${libraryName.name}.`
    }  else {
   return `There are a total of ${libraryName.shelves[genre].length} ${genre} books at the ${libraryName.name}.`
  }
 }



module.exports = {
  
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};

// console.log('THIS WILL SHOW THE INDEX POSITIONNNNNNN: ', Object.values(libraryName.shelves)[i])
// console.log('THIS WILL SHOW THE INDEX COUNT: ', Object.values(libraryName.shelves)[i].length)
// console.log('THIS WILL SHOW STOCK SUM: ', stockLib)


//  IF YOU BREAK IT THIS WORKED
// function takeStock(libraryName, genre){
//   var stockBook = 0
//   if (genre === undefined){
//  return `There are a total of ${Object.values(libraryName.shelves).length} books at the ${libraryName.name}.`
//     } else {
//   for (i = 0; i < libraryName.shelves[genre].length; i++){
//    stockBook += libraryName.shelves[genre].length
//    return `There are a total of ${stockBook} ${genre} books at the ${libraryName.name}.`
//   }
//  }
//  }

// if (genre === undefined){
//  for  (i = 0; i < libraryName.shelves[genre][i].length; i++){
//   stockBook += Object.values(libraryName.shelves[genre][i].length)}
// return `There are a total of ${stockBook} books at the ${libraryName.name}.`
//  }


// function takeStock(libraryName, genre){
//   var stockBook = 0
//   if (genre === undefined){
//  return `There are a total of ${Object.values(libraryName.shelves).length} books at the ${libraryName.name}.`
//     } else {
//   for (i = 0; i < libraryName.shelves[genre].length; i++){
//    stockBook += libraryName.shelves[genre].length
//    return `There are a total of ${stockBook} ${genre} books at the ${libraryName.name}.`
//   }
//  }
//  }


// function takeStock(libraryName, genre){
//   if (genre !== undefined){
//    return `There are a total of ${stockBook} ${genre} books at the ${libraryName.name}.`
//   } else {
//  var stockBook = 0
//    return `There are a total of ${Object.values(libraryName.shelves).length} books at the ${libraryName.name}.`
//    } 
//  }





// function takeStock(libraryName, genre){
//   var stockBook = 0
//   if (genre === undefined){
//  return `There are a total of ${Object.values(libraryName.shelves).length} books at the ${libraryName.name}.`
//     } else {
//   for (i = 0; i < libraryName.shelves[genre].length; i++){
//    stockBook += libraryName.shelves[genre].length
//    return `There are a total of ${stockBook} ${genre} books at the ${libraryName.name}.`
//   }
//  }
//  }