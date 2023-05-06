import { currentUser } from "@clerk/nextjs";

export const runtime = "edge";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex flex-col text-center items-center justify-center px-4 py-16">
      {user ? (
        <h1>
          Hi, {user?.firstName} {user?.lastName}
        </h1>
      ) : (
        <h1>Not Signed In</h1>
      )}
    </main>
  );
}
