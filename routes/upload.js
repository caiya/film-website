const router = require('koa-router')()

router.prefix('/upload')

router.get('/', async (ctx, next)=> {
  await ctx.render('upload')
})

module.exports = router
