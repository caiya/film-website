const router = require('koa-router')()

router.prefix('/copyright')

router.get('/', async (ctx, next)=> {
  await ctx.render('copyright')
})


module.exports = router
