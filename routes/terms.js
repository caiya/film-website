const router = require('koa-router')()

router.prefix('/terms')

router.get('/', async (ctx, next)=> {
  await ctx.render('terms')
})


module.exports = router
