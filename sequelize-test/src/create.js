const { User, Blog } = require('./model')

// await语法，外部要有一个自执行async函数
!(async function() {
    // // 创建user
    // const zhangsan = await User.create({
    //     username: 'zhangsan',
    //     password: '123',
    //     realname: '张三'
    // })

    // console.log('zhangsan', zhangsan.dataValues)


    // 创建博客
    const blog = await Blog.create({
        title: '博客标题1',
        content: '博客内容1',
        author: 'zhangsan'
    })

    console.log('blog', blog.dataValues)
})()