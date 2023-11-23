const { Blog } = require('./model')

!(async function() {
    const res = await Blog.update(
        // 要修改的内容
        {
            title: '标题AAA',
            content: '内容AAA'
        },
        // 条件
        {
            where: {
                id: 1
            }
        }
    )

    console.log('res', res)
})()