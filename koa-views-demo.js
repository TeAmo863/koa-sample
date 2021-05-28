import Koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
// ----- 导入 koa-static -----
import source from 'koa-static'
// ----- 导入 koa-static -----

const app = new Koa()
const router = new Router()

// ----- 指定静态资源目录 -----
app.use(source('./static'))
// ----- 指定静态资源目录 -----

// 执行初始化操作（需要放在所有路由的前面）
app.use(views('./views', {
   // 指定模板引擎
   map: {
       // 使用 EJS 作为模板渲染引擎
       ejs: 'ejs'
   }
}))

router.get('/', async ctx => {
   // render 是一个异步函数，所以需要在前方添加 await 关键字来接收异步任务的结果
   // render 函数的第二个参数，可以用于定义传递给模板引擎的数据
   await ctx.render('./index.ejs', {
       // 将 msg 对象传递给模板文件
       msg: {
           info: '这是一段来自 koa-views-demo 的信息'
       }
   })
})

// 将路由注册到应用上
app.use(router.routes()).use(router.allowedMethods())

// 启动服务并监听 3000 端口
app.listen(3000)
console.log('服务正在运行...')