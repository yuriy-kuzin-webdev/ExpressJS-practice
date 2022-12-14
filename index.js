import express from "express"
import path from "path"
import { requestTime, logger } from "./middlewares.js"
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

//Setting view engine to ejs 
app.set('view engine', 'ejs')
//Changing the template path to ejs
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(serverRoutes)
app.use(express.static(path.resolve(__dirname,'static')))
app.use(requestTime)
app.use(logger)


app.get('/', (req, res) => {
    res.render('index', {title: 'Index'})
})
app.get('/features', (req, res) => {
    res.render('features', {title: 'Features'})
})
app.get('/download', (req,res) =>{
    res.download(path.resolve(__dirname,'static','index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})