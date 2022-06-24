const itemCounter = (item) => item.length;

const displayItemCounter = (result) => {
  const counter = document.querySelector('.');
};
const displayItemCounted = (result) => {
  const counter = document.querySelector('.item-counter');
  counter.innerText = `TV series(${itemCounter(result)})`;
};

export { itemCounter, displayItemCounted };
