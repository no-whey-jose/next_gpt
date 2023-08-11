import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { isLoading, error, user } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Head>
        <title>Fizzingbuns - The Sagely Gnome</title>
      </Head>
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-800 text-center text-white">
        <div>
          {user ? (
            <Link
              href="/api/auth/logout"
              className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                href="/api/auth/login"
                className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600"
              >
                Login
              </Link>
              <Link
                href="/api/auth/signup"
                className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
