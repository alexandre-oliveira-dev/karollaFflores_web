// enums
export enum OrderStatus {
  deliveryed = "deliveryed",
  delivery = "delivery",
  waitingPayment = "waitingPayment",
}

export enum PaymentMethod {
  pix = "pix",
  money = "money",
  credit = "credit",
  debit = "debit",
}

// Products model
export interface Products {
  id: string;
  title: string;
  price: string;
  type: string;
  imgUrl: string;
  qtdStock: number;
  createdAt: Date;
  categoryId: number;
  Categorys?: Categorys;
}

// Categorys model
export interface Categorys {
  id: number;
  name: string;
  createdAt: Date;
  Products?: Products[];
}

// Users model
export interface Users {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  Orders?: Orders[];
}

// Orders model
export interface Orders {
  id: string;
  createdAt: Date;
  items: string[];
  total: string;
  isDeliveryed: boolean;
  paymentMethod: PaymentMethod;
  userId: string;
  status: OrderStatus;
  Users?: Users;
}
