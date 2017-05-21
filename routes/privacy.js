const router = require('koa-router')()

router.prefix('/privacy')

router.get('/', async (ctx, next)=> {
  await ctx.render('privacy')
})


module.exports = router
