// 导入 Koa
import Koa from 'koa'
// 导入 koa-router 组件
import Router from 'koa-router'

// 创建一个 Koa 应用实例
const app = new Koa()
// 创建一个路由实例
const router = new Router()

// ----- 定义静态路由 -----
// 当访问 / 路径时，会返回 Hello World! -- Koa Router 字符串
router.get('/', async ctx => {
ctx.body = 'Hello World! -- Koa Router'
})
// 当访问 /list 路径时，会返回一个示例数组
router.get('/list', async ctx => {
ctx.body = [1, 2, 3, 'Koa Router']
})
// ----- 定义静态路由 -----

// ----- 定义动态路由 -----
// 当访问 /dynamic/[name] 路径时，会返回请求的接口信息
router.get('/dynamic/:name', async ctx => {
   // 通过 ctx.params.name 可以获取到传入的 name 变量
   ctx.body = `请求地址为：/dynamic/${ctx.params.name}  -- Koa Router`
})
// ----- 定义动态路由 -----

// 将路由实例 router 与应用实例 app 关联起来
app.use(router.routes()).use(router.allowedMethods())

// 启动服务并监听 3000 端口
app.listen(3000)
console.log('服务正在运行...')