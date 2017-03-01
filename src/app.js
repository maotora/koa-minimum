require('dotenv').config()
import koa from 'koa'
import convert from 'koa-convert'
import body from 'koa-better-body'
import router from 'koa-rest-router'

const app = new koa()

app.use(convert(body({
    multipart: true,
    fields: 'body'
})))

export default app
