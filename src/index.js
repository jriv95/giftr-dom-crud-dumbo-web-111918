// - A user should be able to see all of the gift data on initial page load
// - A user should be able to search for and filter particular gifts with names that _include_ a particular search query.
// - A user should be able to delete a particular gift
// - A user (any user, don't worry about authorization) should be able to edit a gift's details



document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded');
  console.table(gifts);
  giftList(gifts);
  addListenerToTheDeleteButton();
})


function giftList(gifts) {

  const ul = document.querySelector(".gift-list");

  gifts.forEach(gift => {
    const li = document.createElement("li");
    const image = document.createElement("img");
    const button = document.createElement('button');
    image.src = `${gift.image}`;
    li.innerText = `${gift.name}`;
    button.innerText = "x";
    button.id = "delete";
    ul.append(li);
    li.append(image);
    li.append(button);
  })
}


function addListenerToTheDeleteButton() {
  let ulParent = document.querySelector('.gift-list');
  ulParent.addEventListener('click', deleteItem)
}
function deleteItem(event) {
  if (event.target.id === 'delete') {
    event.target.parentNode.remove();
  }
}
