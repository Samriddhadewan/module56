require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


// middleware 
app.use(cors())
app.use(express.json())

// coffeeMaster
// INzGhhnn1WlhVOge



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mx4ls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const coffeeDB = client.db("coffeeDB").collection("coffees");
    const UserDB = client.db("coffeeDB").collection("users");

    app.get("/coffees", async (req, res)=>{
      const cursor = coffeeDB.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get("/coffees/:id", async(req, res)=> {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeDB.findOne(query);
      res.send(result);

    })

    app.put("/coffees/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options ={upsert: true}
      const updatedValue = req.body;
      const updateDoc = {
        $set : {
          name: updatedValue.name,
          chef: updatedValue.chef, 
          supplier: updatedValue.supplier, 
          category:updatedValue.category, 
          details:updatedValue.details, 
          photo:updatedValue.photo,
        }
      }
      const result = await coffeeDB.updateOne(filter, updateDoc, options)
      res.send(result);
    })


    app.post("/coffees", async(req, res)=> {
        const newCoffee = req.body;
        const result = await coffeeDB.insertOne(newCoffee);
        res.send(result) 
    })

    app.delete("/coffees/:id", async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeDB.deleteOne(query);
      res.send(result)
    })

    app.get("/users", async (req, res) => {
      const cursor =  UserDB.find();
      const users = await cursor.toArray()
      res.send(users);
    })

    app.post("/users", async(req, res)=> {
      const newUser = req.body;
      const result = await UserDB.insertOne(newUser);
      res.send(result)
    })

    app.patch("/users", async(req, res)=> {
      const email = req.body.email;
      const filter = {email}
      const updateDoc = {
        $set:{
          LastSignInTime : req?.body?.lastSignInTime
        }
      }
      const result = await UserDB.updateOne(filter, updateDoc)
      res.send(result);
    })

    app.delete("/users/:id", async(req, res)=> {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await UserDB.deleteOne(query);
      res.send(result)
    })




    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/", (req, res)=> {
    res.send("coffee making server is running")
})

app.listen(port, ()=> {
    console.log(`coffee server is running on ${port}`)
})