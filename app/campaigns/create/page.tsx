"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campaignSchema, CampaignInput } from "@/schemas/campaign.schema";
import { createCampaign } from "@/services/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/MainLayout";

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
    <MainLayout>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="p-10 min-h-screen">
          <h1 className="text-2xl font-bold text-primary mb-6">
            Create Campaign
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 shadow rounded"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium">
                    Campaign Name
                  </label>

                  <input
                    {...register("name")}
                    className="w-full border p-3 rounded"
                    placeholder="Summer Campaign"
                  />

                  <p className="text-red-500 text-sm">{errors.name?.message}</p>
                </div>

                <div>
                  <label className="block mb-1 font-medium">Advertiser</label>

                  <input
                    {...register("advertiser")}
                    className="w-full border p-3 rounded"
                    placeholder="Nike"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.advertiser?.message}
                  </p>
                </div>

                <div>
                  <label className="block mb-1 font-medium">Start Date</label>

                  <input
                    type="date"
                    {...register("startDate")}
                    className="w-full border p-3 rounded"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.startDate?.message}
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium">End Date</label>

                  <input
                    type="date"
                    {...register("endDate")}
                    className="w-full border p-3 rounded"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.endDate?.message}
                  </p>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Budget</label>

                  <input
                    type="number"
                    {...register("budget", { valueAsNumber: true })}
                    className="w-full border p-3 rounded"
                    placeholder="100000"
                  />

                  <p className="text-red-500 text-sm">
                    {errors.budget?.message}
                  </p>
                </div>
                <div>
                  <label className="block mb-2 font-medium">
                    Target Countries
                  </label>

                  <div className="flex gap-4 flex-wrap">
                    {countries.map((country) => (
                      <label key={country} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={country}
                          {...register("targetCountries")}
                        />
                        {country}
                      </label>
                    ))}
                  </div>

                  <p className="text-red-500 text-sm">
                    {errors.targetCountries?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white px-6 py-3 rounded my-5 cursor-pointer"
              >
                {loading ? "Creating..." : "Create Campaign"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
