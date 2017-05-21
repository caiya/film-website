const router = require('koa-router')()

router.prefix('/news')

router.get('/', async (ctx, next)=> {
  await ctx.render('news')
})


module.exports = router
