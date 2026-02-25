import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/app/components/LogoutButton";
import ProfileForm from "@/app/components/ProfileForm";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) return <p>Unauthorized</p>;

  return (
    <div className="p-6 text-center container mx-auto flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {session.user.name}!
      </h1>

      <p>Email: {session.user.email}</p>

      <ProfileForm user={session.user} />

      <Link href="/dashboard" className="submit_btn mt-3">
        Dashboard
      </Link>
    </div>
  );
}