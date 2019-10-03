
export interface FindNewsDetail {
  _id: string;
  title: string;
  state: string;
  description: string;
  imageUrls: string[];
  price: number;
  priceType: string;
  newsType: string;
  owner: string;
  shop: string;
  location: string;
  status: string;
  usedHours: number;
  serialNo: string;
  categoryId: string;
  type: string;
  brand: string;
  model: string;
  weight: number;
  weightRange: string;
  year: number;
  rentalPeriod: string;
  reviewedAt: Date;
  reviewedBy: string;
  isFollowing: boolean;
  followBy: string[];
  createdDate: Date;
}
