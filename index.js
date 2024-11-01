const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qf8hqc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db('restaurantDB');
        const menuCollection = database.collection('menuItems');
        const cartCollection = database.collection('cartItems');

        /*------------------------------------------------ 
                Menu Collection API
        -------------------------------------------------*/

        // Get all menu items 
        app.get('/menuItems', async (req, res) => {
            const cursor = menuCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        /*--------------------------------------------- 
                Cart Collection API
        ----------------------------------------------*/

        // Get all cart data
        app.get('/cartItems', async (req, res) => {
            const cursor = cartCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // Store cart data 
        app.post('/cartItems', async (req, res) => {
            const cart = req.body;
            const result = await cartCollection.insertOne(cart);
            res.send(result);
        });

        // Update the quantity of a cart data
        app.patch('/cartItems/:id', async (req, res) => {
            const id = req.params.id;
            const { quantity } = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedCart = {
                $set: {
                    quantity: quantity
                }
            };
            const result = await cartCollection.updateOne(filter, updatedCart);
            res.send(result);
        });

        // Delete the cart by its id
        app.delete('/cartItems/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Restaurant is running successfully');
});

app.listen(port, () => {
    console.log(`Restaurant is running on the PORT: ${port}`);
});