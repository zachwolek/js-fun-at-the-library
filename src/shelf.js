function shelfBook(book, sciFiShelf){
  if (sciFiShelf.length < 3){
  sciFiShelf.unshift(book);
  }
  return sciFiShelf
}

function unshelfBook(bookTitle, sciFiShelf){
  for (i = 0; i < sciFiShelf.length; i++){
    if (sciFiShelf[i].title === bookTitle){
      sciFiShelf.splice(i, 1)
    }
  }
  return sciFiShelf
}

function listTitles(fantasyShelf){
  var shelf = []
  for (i = 0; i < fantasyShelf.length; i++){
    shelf.push(fantasyShelf[i].title)
  }
  var titles = shelf.join(', ')
  return titles
}






function searchShelf(bookShelf, title){
  var shelf = []
  for (i = 0; i < bookShelf.length; i++){
    shelf.push(bookShelf[i].title)
    console.log(`this will show the shelf: `, shelf)}
if (shelf.includes(title)){
return true
} else {
  return false
}
}

module.exports = {
  shelfBook,
 unshelfBook,
  listTitles,
  searchShelf
};