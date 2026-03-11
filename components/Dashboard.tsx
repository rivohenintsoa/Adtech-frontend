"use client";
import { useEffect, useState } from "react";
import { getStats } from "@/services/api";

interface Stats {
  totalCampaigns: number;
  activeCampaigns: number;
  totalImpressions: number;
  topAdvertiser: string;
}

const cards = (stats: Stats) => [
  { label: "Total Campaigns", value: stats.totalCampaigns },
  { label: "Active Campaigns", value: stats.activeCampaigns },
  { label: "Total Impressions", value: stats.totalImpressions },
  { label: "Top Advertiser", value: stats.topAdvertiser },
];

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };
    fetchStats();
  }, []);

  if (!stats)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    );

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-dark">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards(stats).map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
              {label}
            </p>
            <h2 className="text-3xl font-bold text-primary-dark">{value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}