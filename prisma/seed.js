const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            nome: "Teste",
            email: "teste@example.com",
            senha: "12345678",
            cpf: "12345678901",

        }
    })
}

main().finally(() => prisma.$disconnect());