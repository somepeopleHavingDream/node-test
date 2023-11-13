const redis = require('redis')

!(async function () {
    // 创建客户端
    // const redisClient = redis.createClient(6379, '192.168.1.103')
    const redisClient = redis.createClient({
        socket: {
            host: '192.168.1.103',
            port: 6379
        }
    })

    // 连接
    await redisClient.connect()
        .then(() => console.log('redis connect success!'))
        .catch(console.error)

    // set
    await redisClient.set('myname', 'zhangsan123')

    // get
    const myname = await redisClient.get('myname')
    console.log('myname', myname)

    // 退出
    redisClient.quit()
})()