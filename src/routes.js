import {Router} from "express"  //rotas são middleswares

const routes = new Router()

routes.get('/',(request,response)=>{
    return response.json({message:"Hello World"})
})

export default routes