// Importação das enums para serem usadas nos tipos
export enum OrderStatus {
  DELIVERYED = "deliveryed",
  DELIVERY = "delivery",
  WAITING_PAYMENT = "waitingPayment",
}

export enum PaymentMethod {
  PIX = "pix",
  MONEY = "money",
  CREDIT = "credit",
  DEBIT = "debit",
}

// Tipos para os modelos do Prisma

export type Products = {
  id: number;
  title: string;
  price: string;
  type: string;
  imgUrl: string;
  qtdStock: number;
  createdAt: Date;
  isNewsLister: boolean;
  categoryId: number;
  Categorys: Categorys;
};

export type Categorys = {
  id: number;
  name: string;
  createdAt: Date;
  Products: Products[];
};

export type Users = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  Orders?: Orders[];
};

export type Orders = {
  id: number;
  createdAt: Date;
  items: string[];
  total: string;
  isDeliveryed: boolean;
  paymentMethod: PaymentMethod;
  userId: string;
  status: OrderStatus;
  Users: Users;
};
