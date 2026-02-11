import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) return <p>Unauthorized</p>;

  return <div>Welcome {session.user.name}</div>;
}
