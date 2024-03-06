
let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.cart-item-count');
    if(bagItems.length >0 ){
      bagItemCountElement.style.visibility = 'visible';
      bagItemCountElement.innerText = bagItems.length;
    }else{
      bagItemCountElement.style.visibility = 'hidden';
    }
   
}


function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-main-container');
  if(!itemsContainerElement){
    return;
  }
  let innerHTML = '';
items.forEach((item)=>{
  innerHTML +=`
  <div class="item-container">
    <img class="item-image" src=${item.image} alt="">
    <div class="rating">${item.rating.stars}⭐| ${item.rating.count} </div>
    <div class="brand-name">${item.brand_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">Rs.${item.current_price}</span>
      <span class="original-price">Rs.${item.original_price}</span>
      <span class="discount">(${item.discount_percentage} %)</span>
    </div>
    <button onClick="addToBag(${item.id})" class="add-to-bag-btn">Add to Bag</button>
  </div>
  `
});

itemsContainerElement.innerHTML = innerHTML;

}
