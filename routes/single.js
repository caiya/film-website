const router = require('koa-router')()

router.prefix('/single')

router.get('/', async (ctx, next)=> {
  await ctx.render('single')
})


module.exports = router
