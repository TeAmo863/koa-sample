import Koa from 'koa'
import Router from 'koa-router'
// 导入自定义中间件
import mid from './middlewares/mid-demo'

const app = new Koa()
const router = new Router()

// 全局挂载 mid 中间件
app.use(mid())

router.get('/', async ctx => {
   console.log('----- 定义路由的执行功能 -----')
   ctx.body = "自定义中间件已经成功生效，中间件日志信息请前往终端查看..."
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('服务正在运行...')