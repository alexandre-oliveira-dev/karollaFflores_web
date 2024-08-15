export type QueryMode = {
  default: "default";
  insensitive: "insensitive";
};

export type IntFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number;
};

export type StringFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: string;
};

export type ProductsWhereInput = {
  AND?: ProductsWhereInput | ProductsWhereInput[];
  OR?: ProductsWhereInput[];
  NOT?: ProductsWhereInput | ProductsWhereInput[];
  id?: IntFilter | number;
  title?: StringFilter | string;
  price?: StringFilter | string;
  description?: string | null;
  type?: StringFilter | string;
  qtdStock?: IntFilter | number;
  createdAt?: Date | string;
  isNewsLister?: boolean;
  categoryId?: IntFilter | number;
};

export type ProductsFindManyArgs = {
  where?: ProductsWhereInput;

  take?: number;

  skip?: number;
};
