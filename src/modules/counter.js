const itemCounter = (item) => item.length;

const displayItemCounted = (result) => {
  const counter = document.querySelector('.item-counter');
  counter.innerText = `TV series(${itemCounter(result)})`;
};

export { itemCounter, displayItemCounted };