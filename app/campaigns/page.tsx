"use client";
import { useEffect, useState } from "react";
import { getCampaigns } from "@/services/api";
import { Campaign } from "@/types/campaign";

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const data = await getCampaigns();
      setCampaigns(data);
      setLoading(false);
    };
    fetchCampaigns();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    );

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <h1 className="text-2xl font-bold text-primary-dark mb-6">Campaigns</h1>

      <div className="rounded-xl border border-gray-200 overflow-hidden">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-primary text-white [&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium">
              <th>Name</th>
              <th>Advertiser</th>
              <th>Status</th>
              <th>Impressions</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c._id} className="border-t border-gray-100 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-3 [&>td]:text-gray-600">
                <td className="font-medium text-gray-800">{c.name}</td>
                <td>{c.advertiser}</td>
                <td>{c.status}</td>
                <td>{c.impressionsServed}</td>
                <td>${c.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}