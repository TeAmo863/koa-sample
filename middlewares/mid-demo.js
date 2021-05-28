export default () => {
   return async (ctx, next) => {
       // 中间件的功能代码...
       console.log('----- custom middleware start -----')
       await next()
       // 中间件的功能代码...
       console.log('----- custom middleware end -----')
   }
}