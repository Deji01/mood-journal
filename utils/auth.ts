import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserByClerkID = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User ID not found");
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });

  return user;
};
