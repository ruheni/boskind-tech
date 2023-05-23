import prisma from "../lib/prisma";
import { hash } from "bcryptjs";

async function main() {
  const password = await hash("password", 10);
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: "rob@boskind.tech" },
      update: {},
      create: {
        name: "Rob Boskind",
        email: "rob@boskind.tech",
        password,
        image: "",
      },
    }),
    prisma.users.upsert({
      where: { email: "rauchg@vercel.com" },
      update: {},
      create: {
        name: "Guillermo Rauch",
        email: "rauchg@vercel.com",
        password,
        image:
          "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
      },
    }),
    prisma.users.upsert({
      where: { email: "lee@vercel.com" },
      update: {},
      create: {
        name: "Lee Robinson",
        email: "lee@vercel.com",
        password,
        image:
          "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
      },
    }),
    await prisma.users.upsert({
      where: { email: "stey@vercel.com" },
      update: {},
      create: {
        name: "Steven Tey",
        email: "stey@vercel.com",
        password,
        image:
          "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
      },
    }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
