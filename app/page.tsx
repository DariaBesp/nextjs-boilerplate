import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/reservation"
            className="rounded-xl bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
          >
            Make a Reservation
          </Link>
          <Link
            href="/work-portal/login"
            className="rounded-xl bg-zinc-800 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition hover:bg-zinc-900 hover:shadow-xl dark:bg-zinc-700 dark:hover:bg-zinc-600"
          >
            Login to Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
