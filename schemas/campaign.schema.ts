import { z } from "zod";

export const campaignSchema = z.object({
  name: z.string().min(2, { message: "Campaign name is required" }),

  advertiser: z
    .string()
    .min(2, { message: "Advertiser is required" }),

  startDate: z.string().min(1, { message: "Start date is required" }),

  endDate: z.string().min(1, { message: "End date is required" }),

  budget: z
    .number()
    .min(1, { message: "Budget must be greater than 0" }),

  targetCountries: z
    .array(z.string())
    .min(1, { message: "Select at least one country" }),
});

export type CampaignInput = z.infer<typeof campaignSchema>;