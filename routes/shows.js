const router = require('koa-router')()

router.prefix('/shows')

router.get('/', async (ctx, next)=> {
  await ctx.render('shows')
})


module.exports = router
