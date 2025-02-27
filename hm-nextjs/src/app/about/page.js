import Link from "next/link";
import { FaHome } from "react-icons/fa";

const members = [
  { name: "Kayla", funFact: "TBA" },
  { name: "Paris", funFact: "I played club volleyball for 8 years" },
  { name: "Sharon", funFact: "I like Pandas!" },
];

const MembersTable = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Members</h2>
      <table className="mt-6 min-w-full border-collapse text-sm shadow-md">
        <thead>
          <tr className="bg-purple-800 text-white text-left">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Fun Fact</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr
              key={index}
              className={`border-b border-gray-300 ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="px-6 py-4">{member.name}</td>
              <td className="px-6 py-4">{member.funFact}</td>
            </tr>
          ))}
          <tr className="border-b-2 border-purple-800"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">About Hannah Montana!</h1>
      <Link href="/" className="link">
        <div className="flex items-center gap-2 text-blue-500 underline">
          <FaHome /> Home
        </div>
      </Link>

      <MembersTable />
    </main>
  );
}
