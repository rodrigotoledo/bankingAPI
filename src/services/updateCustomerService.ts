import prismaClient from "../prisma";

interface updateCustomerProps{
    id: string;
    name: string;
    email: string;
}

class updateCustomerService{
    async execute({id, name, email}: updateCustomerProps){
        if (!id) {
            throw new Error("Customer ID is required!");
        }

        const existingCustomer = await prismaClient.customer.findUnique({
            where: { id },
        });

        if (!existingCustomer) {
            throw new Error("Customer not found!");
        }

        const updatedCustomer = await prismaClient.customer.update({
            where: { id },
            data: {
            name,
            email,
            },
        });

        return updatedCustomer;
        

    }
}

export {updateCustomerService}