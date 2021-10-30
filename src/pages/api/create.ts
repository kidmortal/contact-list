// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, User } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  user: User;
};
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await prisma.user.create({
    data: { name: "Jose", job: "Cortador de pedra" },
  });
  res.status(200).json({ user });
}
