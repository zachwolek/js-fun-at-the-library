function createTitle(title) {
 return `The ${title}`; 
  } 

var bookIdea = console.log(createTitle("Storm's Awakening"))

function buildMainCharacter(nameChar, ageChar, pronounsChar){
  return {
    name: nameChar,
    age: ageChar, 
    pronouns: pronounsChar
  }
}
var ghoulCharacter = console.log(buildMainCharacter("Vassya", 16, "she/her")); 
var bakerCharacter = console.log(buildMainCharacter("Hannah", 30, "she/her")); 


  module.exports = {
  createTitle, 
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
  }