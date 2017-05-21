const router = require('koa-router')()

router.prefix('/history')

router.get('/', async (ctx, next)=> {
  await ctx.render('history')
})


module.exports = router
