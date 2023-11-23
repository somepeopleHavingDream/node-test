const { Blog } = require('./model')

!(async function () {
    const res = await Blog.destroy({
        // 条件
        where: {
            id: 1,
            author: 'zhangsan'
        }
    })

    console.log('res', res)
})()