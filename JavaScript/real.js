


async function fetchProductsWithAsync() {
    try {
        let result = await fetch('https://fakestoreapi.com/products')
        let data = await result.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    } finally {

    }
}

async function fetchProductsWithThen() {
    fetch('https://fakestoreapi.com/products').
        then((result) => {
            result.json()
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }).catch((err) => {
            console.log(err.message);
        })
}

fetchProductsWithThen()


let data = {
    name: "Rounak",
    password: "12345"
}


