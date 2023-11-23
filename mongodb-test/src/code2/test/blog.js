const Blog = require('../model/Blog')

// 自执行的异步函数
!(async () => {
    // // 获取列表
    // const list = await Blog.find({
    //     // 正则表达式，模糊查询
    //     title: /A/
    // }).sort({
    //     _id: -1
    // })
    // console.log(list)

    // // 根据 id 获取单个博客
    // const blog3 = await Blog.findById('655e0c680deabee4a98c7ebf')
    // console.log(blog3)

    // // 修改博客
    // const res = await Blog.findOneAndUpdate(
    //     // 条件
    //     {
    //         _id: '655e0c680deabee4a98c7ebf'
    //     },
    //     {
    //         content: '内容3内容3'
    //     },
    //     {
    //         // 返回修改之后的最新的内容，默认为 false
    //         new: true
    //     }
    // )
    // console.log(res)

    // 删除
    const res = await Blog.findOneAndDelete({
        _id: '655e0c680deabee4a98c7ebf',
        // 验证一下作者，增加安全性，防止误删
        author: 'zhangsan'
    })
    console.log(res)
})()