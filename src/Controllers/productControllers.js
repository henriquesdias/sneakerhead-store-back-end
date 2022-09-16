import db from "../Database/db.js";

async function createProducts(req,res) {
    const products = req.body;
    if(!products) {
        return res.status(422).send('You must send a product!');
    }

    try {
        if(products.length>1) {
            await db.collection('products').insertMany(products);
            res.send(201);
        } else {
            await db.collection('products').insertOne(products);
            res.sendStatus(201);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function readProducts(req,res) {
    try {
        const products = await db.collection('products').find().toArray();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { createProducts, readProducts};