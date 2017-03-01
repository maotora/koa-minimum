import 'babel-polyfill'
import app from './app'

const PORT = process.env.PORT || 3000
const APP_NAME = process.env.APP_NAME || 'Unamed App'

app.listen(PORT, () => console.log(`${APP_NAME} started at ${PORT}`))
