import express from 'express'
import cors from 'cors'
import sequelize from './connection'
import bodyParser from 'body-parser'
import session from 'express-session'
import * as loginController from './controllers/login'
const app = express()
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'some string',
    resave: false,
    saveUninitialized: false

}))

app.use(bodyParser.json())
app.use(express.urlencoded({ extended:true}))
app.post('/login', loginController.login)
async  function start() {
    try {
        await sequelize.sync()
        app.listen(3030,'10.0.0.156', () => {
            console.log('server is running...')
        })
    } catch(e) {
        console.log(e)
    }
}

start()