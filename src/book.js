function createTitle(title) {
 return `The ${title}`; 
  } 

// var bookIdea = console.log(createTitle("Storm's Awakening"))

function buildMainCharacter(nameChar, ageChar, pronounsChar){
  return {
    name: nameChar,
    age: ageChar, 
    pronouns: pronounsChar
  }
}
// var ghoulCharacter = console.log(buildMainCharacter("Vassya", 16, "she/her")); 
// var bakerCharacter = console.log(buildMainCharacter("Hannah", 30, "she/her")); 

function saveReview(newReview, totalReviews){
  if (!totalReviews.includes(newReview)){
    totalReviews.push(newReview)
  }
  return totalReviews
};

function calculatePageCount(countTitle){
return (countTitle.length * 20)
};

//Add 20 per letter in title
//Find the number of characters in a book
//multiply the number of book characters x 20
//have it be the varable bookPageCount 

function writeBook(bookTitle, bookCharacter, bookGenre){
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle), 
    genre: bookGenre, 
  }
};

function editBook(bookObject){
    bookObject.pageCount = bookObject.pageCount * 3/4
  };


// var abc = "The Teenage Ghoul"
// console.log(abc.length);
// console.log(abc.length * 20);
// console.log(abc.length * 20 * 3 / 4);


// editBook(dragonBook)
// var dragonTitle = "Dragon in the Summer";
// console.log(dragonTitle.length);
// console.log(dragonTitle.length * 20);
 module.exports = {
  createTitle, 
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
  }