import express from "express";
const app = express();
const port = 3000;



// Replace this with your actual product data or database query
const products = [
    { id: 1, name: 'Product 1', description: 'Product 1 description', imageUrl: 'https://example.com/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Product 2 description', imageUrl: 'https://example.com/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Product 3 description', imageUrl: 'https://example.com/product3.jpg' },
    { id: 4, name: 'Product 1', description: 'Product 4 description', imageUrl: 'https://example.com/product4.jpg' },
    { id: 5, name: 'Product 2', description: 'Product 5 description', imageUrl: 'https://example.com/product5.jpg' },
    { id: 6, name: 'Product 3', description: 'Product 6 description', imageUrl: 'https://example.com/product6.jpg' },
    { id: 7, name: 'Product 1', description: 'Product 7 description', imageUrl: 'https://example.com/product7.jpg' },
    { id: 8, name: 'Product 2', description: 'Product 8 description', imageUrl: 'https://example.com/product8.jpg' },
    { id: 9, name: 'Product 3', description: 'Product 9 description', imageUrl: 'https://example.com/product9.jpg' },
    { id: 10, name: 'Product 1', description: 'Product 10 description', imageUrl: 'https://example.com/product10.jpg' },
    { id: 11, name: 'Product 2', description: 'Product 11 description', imageUrl: 'https://example.com/product11.jpg' },
    { id: 12, name: 'Product 3', description: 'Product 12 description', imageUrl: 'https://example.com/product12.jpg' },
    // Add more products here
];

app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/main', (req, res) => {
    res.render('main.ejs');
});

// CHANGES MADE IN HERE INDEX-MAIN==================


// old
app.get('/product', (req, res) => {
    res.render('product.ejs');
});
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/product', (req, res) => {
    const productId = req.query.id;
    // Fetch product data based on productId, you can use a database query here
    const product = products.find((p) => p.id == productId);
    if (product) {
        // If product is found, send the product details to the product.html page
        // res.render(`
        //     <script>
        //         const productData = ${JSON.stringify(product)};
        //     </script>
        //  `);
        res.render('product', { productData: product });
    } else {
        res.status(404).render('404');
    }
});


// old
app.use((req, res) => {
    res.status(404).render('404');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

