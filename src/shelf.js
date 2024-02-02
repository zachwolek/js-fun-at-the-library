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

function listTitles(){}

// var sciFiShelf = [];
//   sciFiShelf.push(book);
//   return sciFiShelf

module.exports = {
  shelfBook,
 unshelfBook,
  listTitles,
  // searchShelf
};