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

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-2xl font-bold text-primary mb-6">Campaigns</h1>
      <table className="table-auto w-full">
        <thead className="bg-primary text-white">
          <tr className="[&>th]:p-3 [&>th]:text-left">
            <th>Name</th>
            <th>Advertiser</th>
            <th>Status</th>
            <th>Impressions</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c._id} className="border-t [&>td]:p-3 [&>td]:text-left">
              <td>{c.name}</td>
              <td>{c.advertiser}</td>
              <td>{c.status}</td>
              <td>{c.impressionsServed}</td>
              <td>{c.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
