import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">
        Hannah Montana Github Workshop!
      </h1>
      <Link href="/about" className="link">
        <div className="flex items-center gap-2 text-blue-500 underline">
          <FaUser /> About Us
        </div>
      </Link>
    </main>
  );
}
