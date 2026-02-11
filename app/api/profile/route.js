import { prisma } from "@/lib/prisma";

export async function PUT(req) {
  const body = await req.json();

  const user = await prisma.user.update({
    where: { email: body.email },
    data: {
      name: body.name,
      phone: body.phone,
      password: body.password,
    },
  });

  return Response.json(user);
}
