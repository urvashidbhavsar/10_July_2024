$(function () {
    $("header").load("header.html")
})

// api fetch
// fetch('https://fakestoreapiserver.reactbd.com/walmart')
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Api failed")
//         }
//     })
//     .then(data => {
//         // console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });

axios.get('https://fakestoreapiserver.reactbd.com/walmart')
    .then(response => {
        // Access the response data
        const responseData = response.data;
        // console.log(responseData);
        let product = document.querySelector(".productsList");
        for (let i = 0; i < responseData.length; i++) {
            console.log(responseData[i]);
            const { _id, title, des, oldPrice, price, brand, image, category } = responseData[i];
            product.innerHTML += `
            <div class="productcard">
                  <img src="${image}" alt="">
                  <div class="prodetails">
                    <div class="title">${title}</div>
                    <div class="brand">${brand}</div>
                    <div class="description">${des}</div>
                    <div class="price">Rs.
                    <s>${oldPrice}</s> ${price}</div>
                    <div class="add">
                        <button class="cart">Add to Cart</button>
                    </div>
                </div>
            </div>`
        }
    })
    .catch(error => {
        console.log(error);
    });