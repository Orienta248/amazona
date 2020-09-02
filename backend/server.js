import express from 'express';
import data from './data';

const app = express();

app.get("/api/products/:id", (req, res) => { console.log(req.params);
    const productId = req.params.id;
    const product = data.products.find(x=>x.id === productId);
    if(product)
        res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {console.log("Server stated at http://localhost:5000")})

