import { PrismaClient } from '@prisma/client';
import meals from './products.json' with { type: 'json' };
const prisma = new PrismaClient();

const main = async () => {
  for (const meal of meals) {
    await prisma.meal.create({
      data: meal,
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

