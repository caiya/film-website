const router = require('koa-router')()

router.prefix('/developers')

router.get('/', async (ctx, next)=> {
  await ctx.render('developers')
})


module.exports = router
