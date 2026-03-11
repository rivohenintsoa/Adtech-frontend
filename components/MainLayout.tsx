"use client";

import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/" className="hover:underline">
              AdTech
            </Link>
          </h1>
          <nav className="space-x-4">
            <Link href="/campaigns" className="hover:underline">
              Campaigns List
            </Link>
            <Link href="/campaigns/create" className="hover:underline">
              Create Campaign
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
}
