import 'babel-polyfill'
require('dotenv').config()
import koa from 'koa'
import convert from 'koa-convert'
import body from 'koa-better-body'
import router from 'koa-rest-router'

const app = new koa()

const api = router().loadMethods()

api.get('/', async (ctx, next) => {
    
    ctx.body = await 'Hello World!'
    await next()
})

app.use(convert(body({
    multipart: true,
    fields: 'body'
})))

app.use(api.middleware())

export default app
