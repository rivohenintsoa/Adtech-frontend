import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
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