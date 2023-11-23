const Sequelize = require('sequelize')

const conf = {
    host: '192.168.1.102',
    dialect: 'mysql'
}

// // 生产环境下使用连接池（process.env.NODE_ENV）
// conf.pool = {
//     // 连接池中最大的连接数
//     max: 5,
//     // 连接池中最小的连接数
//     min: 0,
//     // 如果一个连接10s内没有被使用，则释放
//     idle: 10 * 1000
// }

// 创建sequelize实例
const seq = new Sequelize(
    // 数据库名称
    'myblog_sequelize',
    // 用户名
    'root',
    // 密码
    '123456',
    conf
)

// // 测试连接
// seq.authenticate().then(() => {
//     console.log('sequelize connect success!')
// }).catch(() => {
//     console.log('sequelize connect failed...')
// })

module.exports = seq