const Sequelize = require('sequelize')
const seq = require('./db')

// User模型
const User = seq.define(
    // 对应同步到数据库的users表（英文复数）
    'user',
    {
        // id不用自己定义，sequelize会帮我们增加上
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        realname: {
            type: Sequelize.STRING
        }
    }
)

// Blog模型
const Blog = seq.define(
    // 对应同步到数据库的blogs表（英文复数）
    'blog',
    {
        // id不用自己定义，sequelize会帮我们增加上
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            // TEXT存储大文件
            type: Sequelize.TEXT,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        }

        // createdAt updatedAt - sequelize 会帮我们创建
    }
)

module.exports = {
    User,
    Blog
}