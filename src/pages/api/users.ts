// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, User } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany({ include: { posts: true } });
  res.status(200).json({ users });
}
