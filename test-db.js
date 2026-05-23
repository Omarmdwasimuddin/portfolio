const { PrismaClient } = require('./src/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log('Connection successful, found', users.length, 'users');
  } catch (e) {
    console.error('Connection failed:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
