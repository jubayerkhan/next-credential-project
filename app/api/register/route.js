import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("BODY:", body);

    const hashed = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        password: hashed,
      },
    });

    console.log("USER SAVED:", user);

    return Response.json(user);
  } catch (error) {
    console.error("🔥 REGISTER ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
