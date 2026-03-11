"use client";

import { useEffect, useState } from "react";
import { getStats } from "@/services/api";

interface Stats {
  totalCampaigns: number;
  activeCampaigns: number;
  totalImpressions: number;
  topAdvertiser: string;
}

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

  if (!stats) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-2xl font-bold text-primary mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Active Campaigns</p>
          <h2 className="text-3xl font-bold">{stats.activeCampaigns}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Total Impressions</p>
          <h2 className="text-3xl font-bold">{stats.totalImpressions}</h2>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <p className="text-gray-500">Top Advertiser</p>
          <h2 className="text-3xl font-bold">{stats.topAdvertiser}</h2>
        </div>
      </div>
    </div>
  );
}