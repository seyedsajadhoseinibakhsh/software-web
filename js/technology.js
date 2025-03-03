// Import files
import { techData } from './techproduc.js';
// DOM
const productsDOM = document.querySelector('.technology__main--items');
const filterBtns = document.querySelectorAll('.technology__main--sortby--btn');

const filters = {
  searchItems: '',
};
// Functions

// Load Technology Product
const productsUI = () => {
  let techBox = '';
  techData.forEach((item) => {
    techBox += `
    <div class="technology__main--items--box">
        <div class="technology__main--items--box--img">
            <img src="${item.imgUrl}" alt="${item.title}">
        </div>
    </div>
    `;
    productsDOM.innerHTML = techBox;
  });
};

// Event Listener
document.addEventListener('DOMContentLoaded', () => {
  productsUI();
});

const filterProducts = (products, _filters) => {
  const filteredProducts = products.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(_filters.searchItems.toLowerCase());
  });

  const productsList = [...productsDOM.children];
  productsList.forEach((product) => {
    const productName = product.firstElementChild.firstElementChild.alt;
    product.style.display = 'none';
    product.style.visibility = 'hidden';
    filteredProducts.forEach((filter) => {
      if (filter.title === productName) {
        product.style.display = 'grid';
        product.style.visibility = 'visible';
      }
    });
  });
};

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const dataSetFilter = e.target.dataset.filter;
    filters.searchItems = dataSetFilter;
    filterProducts(techData, filters);
  });
});
