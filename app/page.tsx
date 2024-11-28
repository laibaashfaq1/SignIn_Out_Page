import { SessionWrapper } from "@/components/SessionWrapper";
import SignoutComponents from "@/components/login/SignoutComponents";
import SigninComponents from "@/components/login/LoginComponents";
import { auth } from "@/lib/auth";
import { Dashboard } from "@/components/Dashboard";



export default async function Home() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <div className="max-w-7xl mx-auto my-12 space-y-5">
      <SessionWrapper>
        {isAuthenticated}
        {/* <SigninComponents/>
        <SignoutComponents/> */}
        <Dashboard/>
      </SessionWrapper>
    </div>
  );
}
