export interface Campaign {
  _id: string;
  name: string;
  advertiser: string;
  status: string;
  impressionsServed: number;
  budget: number;
}