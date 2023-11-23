const fs = require('fs')
const path = require('path')

// 用promise 获取文件内容
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName)

        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }

            resolve(
                JSON.parse(data.toString())
            )
        })
    })

    return promise
}

// getFileContent('a.json').then(aData => {
//     console.log('a data', aData)
//     return getFileContent(aData.next)
// }).then(bData => {
//     console.log('b data', bData)
//     return getFileContent(bData.next)
// }).then(cData => {
//     console.log('c data', cData)
// })

async function readFileData() {
    // 同步写法
    try {
        const aData = await getFileContent('a.json')
        console.log('a data', aData)
        const bData = await getFileContent(aData.next)
        console.log('b data', bData)
        const cData = await getFileContent(bData.next)
        console.log('c data', cData)
    } catch (err) {
        console.error(err)
    }
}

readFileData()

// async await要点：
// 1 await 后面可以追加promise对象，获取resolve的值
// 2 await 必须包裹在async函数里面
// 3 async 函数执行返回的也是一个promise对象
// 4 try-catch截获promise中的reject的值