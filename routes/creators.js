const router = require('koa-router')()

router.prefix('/creators')

router.get('/', async (ctx, next)=> {
  await ctx.render('creators')
})


module.exports = router
