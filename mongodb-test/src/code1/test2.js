const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://192.168.1.102:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'myblog'

async function main() {
    // Use connect method to connect to the server
    await client.connect()
    console.log('Connected successfully to server')

    const db = client.db(dbName)
    const collection = db.collection('users')

    // // Insert a Document
    // const insertResult = await collection.insertMany(
    //     [
    //         {
    //             "username": "Alice",
    //             "password": "123456",
    //             "realname": "爱丽丝"
    //         }
    //     ]
    // )
    // console.log('Inserted documents =>', insertResult)

    // // Find All Document
    // const findResult = await collection.find({}).toArray()
    // console.log('Found documents =>', findResult)

    // // Find Documents with a Query Filter
    // const filteredDocs = await collection.find({ "username": "zhangsan" }).toArray()
    // console.log('Found documents filtered by { "username": "zhangsan" } =>', filteredDocs)

    // // Update a document
    // const updateResult = await collection.updateOne(
    //     {
    //         "username": "Alice"
    //     },
    //     {
    //         $set: {
    //             "realname": "爱丽丝呀"
    //         }
    //     }
    // )
    // console.log('Updated documents => ', updateResult)

    // Remove a document
    const deleteResult = await collection.deleteMany(
        {
            "username": "Alice"
        }
    )
    console.log('Deleted documents => ', deleteResult)

    return 'done.'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close)