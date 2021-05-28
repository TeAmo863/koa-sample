// 导入 Koa
import Koa from 'koa'
// 导入 koa-router 组件
import Router from 'koa-router'

// 创建一个 Koa 应用实例
const app = new Koa()

// ----- 分组路由实现代码 -----
// 创建一个名为 child 的分组路由
const child = new Router({
   // 传递 prefix 参数，用于进行路由分组，以 '/child' 开始的请求都会被此路由响应
   prefix: '/child'
})

// 定义 /child 的请求处理
child.get('/', async ctx => {
   ctx.body = '正在请求 /child 地址'
})

// 定义 /child/list 的请求处理
child.get('/list', async ctx => {
   ctx.body = [
       1, 2, 3, '正在请求 /child/list 地址'
   ]
})

// 将 child 路由注册到应用上
app.use(child.routes()).use(child.allowedMethods())
// ----- 分组路由实现代码 -----

// ----- 嵌套路由实现代码 -----
// 定义一个 parent 路由
const parent = new Router()

// 将 parent 路由与先前定义的 child 路由进行绑定，使其作为 child 路由的外部嵌套路由
parent.use('/parent', child.routes())

// 将 parent 路由注册到应用上
app.use(parent.routes()).use(parent.allowedMethods())
// ----- 嵌套路由实现代码 -----

// 启动服务并监听 3000 端口
app.listen(3000)
console.log('服务正在运行...')