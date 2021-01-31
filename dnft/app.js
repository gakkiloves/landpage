const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express()

//  开启gzip压缩
app.use(compression())
//  配置静态资源路径
app.use(express.static(path.join(__dirname, 'dist')))

//  定义端口
const port = 8081
//  启动网络服务监听
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})
