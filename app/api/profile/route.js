import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PUT(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: body.name,
        phone: body.phone,
      },
    });

    return Response.json(updatedUser);
  } catch (error) {
    console.error(error);
    return new Response("Update failed", { status: 500 });
  }
}