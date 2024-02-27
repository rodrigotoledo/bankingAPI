import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
    balance: number;
}

class createCustomerService{
    async execute({ name, email, balance}: CreateCustomerProps){

        if(!name || !email || !balance){
            throw new Error("Preencha todos os campos!")
        }
        
        const costumer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true,
                balance
                
            },
        });

        return costumer
    }
}

export {createCustomerService}