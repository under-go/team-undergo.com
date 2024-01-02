"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function AuthorizationBtn() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button onClick={() => signOut("google")}>Sign Out</button>
      ) : (
        <button onClick={() => signIn("google")} className="flex items-center">
          Sign In With <FaGoogle className="ml-2" />
        </button>
      )}
    </div>
  );
}
