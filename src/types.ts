export enum OrderStatus {
  Deliveryed = "deliveryed",
  Delivery = "delivery",
  WaitingPayment = "waitingPayment",
}

export enum PaymentMethod {
  Pix = "pix",
  Money = "money",
  Credit = "credit",
  Debit = "debit",
}

export interface ItemsType {
  id: number;
  qtd: number;
}

export interface Photos {
  id: number;
  prodId: number;
  imgBase64: string;
  Products: Products;
}

export interface Products {
  id: number;
  title: string;
  price: string;
  description?: string;
  type: string;
  qtdStock: number;
  createdAt: Date;
  isNewsLister: boolean;
  categoryId: number;
  Photos: Photos[];
  Categorys: Categorys;
}

export interface Categorys {
  id: number;
  name: string;
  createdAt: Date;
  Products: Products[];
}

export interface Users {
  id: number;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  Orders: Orders[];
}

export interface Orders {
  id: number;
  createdAt: Date;
  items: ItemsType[];
  total: string;
  isDeliveryed: boolean;
  paymentMethod: PaymentMethod;
  userId: number;
  status: OrderStatus;
  Users: Users;
}
