import { FastifyRequest, FastifyReply }from "fastify";
import { updateCustomerService } from "../services/updateCustomerService";

class updateCustomerController{
    async handle(request:FastifyRequest, reply:FastifyReply){

        const {id, name, email} = request.body as {id: string; name: string, email: string};

        const customerService = new updateCustomerService();
        const customer = await customerService.execute({id, name, email});   

        reply.send(customer)
    }
}

export {updateCustomerController}