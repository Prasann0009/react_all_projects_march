let products = [{}, {}, {}]; // [100] => 6 + 94
const productsContainer = document.getElementById("products-container");


// domObject.append()
// domObject.appendChild();

// domObject.innerText = "dafjksjkffs"

// domObject.style.backgroundColor = "blue"; 
function renderProducts(products) {
    products.forEach(product => {
        // creates a new DOM object and append inside productsContianer
    })
}

async function onChangeSearchText(searchValue) {
    const newProducts = await fetchProducts(searchValue)
    productsContainer.innerHTML = '';
    renderProducts(newProducts); // [6]
}

/**
 * Benefits of using React
 * 1. Does the selective updates which improves the perfomance of the application.
 * 2. Large community.
 * 3. 
 */