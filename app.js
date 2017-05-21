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

module.exports = app;
