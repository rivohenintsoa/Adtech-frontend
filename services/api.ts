import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCampaigns = async () => {
  const res = await api.get("/campaigns");
  return res.data;
};


export const createCampaign = async (data: any) => {
  const res = await api.post("/campaigns", data);
  return res.data;
};

export const getStats = async () => {
  const res = await api.get("/stats");
  return res.data;
};