const {Router} = require('express') //rotas são middleswares

const routes = new Router()

routes.get('/',(request,response)=>{
    return response.json({message:"Hello World"})
})

module.exports = routes