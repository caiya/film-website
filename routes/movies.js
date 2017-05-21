const router = require('koa-router')()

router.prefix('/movies')

router.get('/', async (ctx, next)=> {
  await ctx.render('movies')
})


module.exports = router
