const router = require('koa-router')()

router.prefix('/sports')

router.get('/', async (ctx, next)=> {
  await ctx.render('sports')
})


module.exports = router
