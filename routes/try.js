const router = require('koa-router')()

router.prefix('/try')

router.get('/', async (ctx, next)=> {
  await ctx.render('try')
})


module.exports = router
