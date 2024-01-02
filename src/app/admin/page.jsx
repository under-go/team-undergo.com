import { getServerSession } from "next-auth";

export default async function page() {
  const email = (await getServerSession()).user.email;

  if (email === process.env.ADMIN_FIRST) {
    return (
      <div className="pt-24 flex justify-center text-center">
        <div className="w-1/2">
          <h1 className="tracking-widest text-3xl font-semibold dark:text-zinc-200">
            ADMIN PAGE
          </h1>
          <div></div>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="text-center pt-24 text-3xl tracking-widest">
        Verfiy Failed...
      </h1>
    );
  }
}
