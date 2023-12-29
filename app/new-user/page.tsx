import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function createNewUser() {
  const user = await currentUser();

  if (user) {
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    });

    if (!match) {
      await prisma.user.create({
        data: {
          clerkId: user.id as string,
          email: user.emailAddresses[0].emailAddress as string,
        },
      });
    }

    redirect("/journal");
  } else {
    // Handle the case where currentUser() returns null
    console.error("User is null");
  }
}

export default async function NewUser() {
  await createNewUser();
  return <div>...Loading</div>;
}
