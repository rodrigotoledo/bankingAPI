import { FastifyRequest, FastifyReply }from "fastify";
import {createCustomerService} from "../services/createCustomerService"

class createCustomerController{
    async handle(request:FastifyRequest, reply:FastifyReply){

        const {name, email, balance} = request.body as {name: string, email: string, balance: number};

        const customerService = new createCustomerService()

        const customer = await customerService.execute({name, email, balance});   

        reply.send(customer)
    }
}

export {createCustomerController}