const router = require('koa-router')()

router.prefix('/press')

router.get('/', async (ctx, next)=> {
  await ctx.render('press')
})


module.exports = router
