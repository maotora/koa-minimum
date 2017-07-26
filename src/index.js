import app from './app'

const PORT = process.env.PORT || 3000
const APP_NAME = process.env.APP_NAME || 'Whatever'

app.listen(PORT, () => console.log(`${APP_NAME} started at ${PORT}`))
