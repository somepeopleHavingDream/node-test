const Sequelize = require('sequelize')
const { Blog, User } = require('./model')

!(async function() {
    // // 登录，查询一条数据
    // const zhangsan = await User.findOne({
    //     // 查询条件
    //     where: {
    //         username: 'zhangsan',
    //         password: '123'
    //     }
    // })

    // if (zhangsan) {
    //     console.log(zhangsan.dataValues)
    // } else {
    //     console.log(zhangsan)
    // }

    // 查询多条数据，博客列表
    const blogList = await Blog.findAll({
        // 条件
        where: {
            author: 'zhangsan',
            title: {
                // 模拟查询，和SQL语句like一样
                [Sequelize.Op.like]: '%标题%'
            }
        },
        // 排序
        order: [
            // SQL语句：order by id desc
            ['id', 'desc']
        ]
    })
    console.log('blogList', blogList.map(item => item.dataValues))
})()