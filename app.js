const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const favicon = require('koa-favicon');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const about = require('./routes/about');
const upload = require('./routes/upload');
const shows = require('./routes/shows');
const copyright = require('./routes/copyright');
const creators = require('./routes/creators');
const developers = require('./routes/developers');
const history = require('./routes/history');
const movies = require('./routes/movies');
const news = require('./routes/news');
const press = require('./routes/press');
const privacy = require('./routes/privacy');
const terms = require('./routes/terms');
const sports = require('./routes/sports');
const trys = require('./routes/try');
const single = require('./routes/single');

// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(views(__dirname + '/views', {
  extension: 'html',
  map: {
    html: 'nunjucks'
  }
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(about.routes(), about.allowedMethods());
app.use(upload.routes(), upload.allowedMethods());
app.use(shows.routes(), shows.allowedMethods());
app.use(copyright.routes(), copyright.allowedMethods());
app.use(creators.routes(), creators.allowedMethods());
app.use(developers.routes(), developers.allowedMethods());
app.use(history.routes(), history.allowedMethods());
app.use(movies.routes(), movies.allowedMethods());
app.use(news.routes(), news.allowedMethods());
app.use(press.routes(), press.allowedMethods());
app.use(privacy.routes(), privacy.allowedMethods());
app.use(terms.routes(), terms.allowedMethods());
app.use(sports.routes(), sports.allowedMethods());
app.use(trys.routes(), trys.allowedMethods());
app.use(single.routes(), single.allowedMethods());

app.use(async (ctx) => {
  ctx.status = 404
  await ctx.render('base/404');
});

module.exports = app;
