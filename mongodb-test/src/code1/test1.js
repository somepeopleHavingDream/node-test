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

    return 'done.'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close)