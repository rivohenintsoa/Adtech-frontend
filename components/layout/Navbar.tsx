"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-dark tracking-tight">
          Ad<span className="text-primary">Tech</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/campaigns"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Campaigns
          </Link>
          <Link
            href="/campaigns/create"
            className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            + New Campaign
          </Link>
        </nav>
      </div>
    </header>
  );
}