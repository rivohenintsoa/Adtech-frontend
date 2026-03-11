"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campaignSchema, CampaignInput } from "@/schemas/campaign.schema";
import { createCampaign } from "@/services/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

const countries = ["FR", "ES", "US", "UK", "DE"];

export default function CreateCampaignPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CampaignInput>({
    resolver: zodResolver(campaignSchema),
  });

  const onSubmit = async (data: CampaignInput) => {
    try {
      setLoading(true);
      await createCampaign(data);
      router.push("/campaigns");
    } catch (error) {
      console.error(error);
      alert("Error creating campaign");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 min-h-screen">
      <h1 className="text-2xl font-bold text-primary-dark mb-8">Create Campaign</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-200 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
              <input
                {...register("name")}
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Summer Campaign"
              />
              <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Advertiser</label>
              <input
                {...register("advertiser")}
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Nike"
              />
              <p className="text-red-500 text-xs mt-1">{errors.advertiser?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-red-500 text-xs mt-1">{errors.startDate?.message}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                {...register("endDate")}
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-red-500 text-xs mt-1">{errors.endDate?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
              <input
                type="number"
                {...register("budget", { valueAsNumber: true })}
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="100000"
              />
              <p className="text-red-500 text-xs mt-1">{errors.budget?.message}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Countries</label>
              <div className="flex gap-3 flex-wrap">
                {countries.map((country) => (
                  <label key={country} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      value={country}
                      {...register("targetCountries")}
                      className="accent-primary"
                    />
                    {country}
                  </label>
                ))}
              </div>
              <p className="text-red-500 text-xs mt-1">{errors.targetCountries?.message}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-6 py-3 rounded-md transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Creating..." : "Create Campaign"}
          </button>
        </div>
      </form>
    </div>
  );
}