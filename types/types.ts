export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
}

export interface Material {
  id: number;
  name: string;
  unitType: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  creatorId: number | null;
  updaterId: number | null;
}

export interface Firm {
  id?: number;
  name: string;
  address: string;
  email: string;
  phoneNo: string;
  status: number;
  tpinNo: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  creatorId: number | null;
  updaterId: number | null;
}
export interface Materials {
  materials: Material[];
}

export interface Purchase {
  id: number,
  MaterialId: number,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
  FirmId: number,
  createdAt: string,
  updatedAt: string,
  Material: {
    name: string | null,
    unitType: string | null,
  },
  Firm: {
    name: string | null,
    address: string | null,
    phoneNo: string | null,
    email: string | null
  },
  creatorId: number | null,
  updatorId: number | null
  deletedAt: string | null,
}


export interface Product {
  id: number;
  name: string;
  price: number;
  materials: {
    STONE: number;
    SAND: number;
    CEMENT: number;
  };
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  creatorId: number;
  updaterId: number | null;
}

export interface Vehicle {
  id: number;
  status: number;
  isPublic: boolean;
  DriverId: number;
  plateNumber: string;
  model: number;
  capacity: number;
  driver: {
    firstName: string,
    lastName: string,
    phoneNo: string
  };
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  creatorId: number;
  updaterId: number | null;
}

export interface User {
  id?: number;
  firstName: string,
  lastName: string
  nrcNo: string;
  phoneNo: string;
  address: string;
  role: number;
  email: string;
  password: string;
  emailToken: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string | null;
  deletedAt?: string | null;
}

export interface Sale {
  id: number,
  FirmId: number | string,
  ProductId: number | string,
  quantity: number,
  unitPrice: number,
  location: string,
  otherCharges: number,
  totalPrice: number,
  discount: number,
  requestedDate: string,
  sideContact: string,
  orderDate: Date | null,
  orderNumber: number,
  status: number,
  createdAt?: string,
  updatedAt?: string | null,
  deletedAt?: string | null,
  creatorId?: number,
  updaterId?: number | null;
  Firm?: {
    name: string
  },
  Product?: {
    name: string
  }
}

export interface WeeklySale {
  id: number,
  title: string,
  date: string,
  orders: [
    {
      projectId: number,
      id: number,
      title: string,
      description: string,
      date: string,
      tags: string
    }
  ]
}

export interface Production {
  id: number,
  SaleId: number | null,
  VehicleIds: Array<Vehicle> | [],
  status: number,
  createdAt: string,
  updatedAt: string | null,
  deletedAt: null,
  creatorId: number,
  updaterId: null,
  Sale: {
    id: number,
    quantity: number,
    FirmId: number,
    orderDate: string,
    Product: {
      id: number,
      name: string
    }
  }
}

export interface Vehicle {
  DriverId: number,
  id: number,
  plateNumber: string,
  model: number,
  capacity: number,
  status: number,
  driver: {
    firstName: string,
    lastName: string,
    phoneNo: string
  }
}

/* DELIVERY */

export interface Delivery {
  id: number;
  status: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | number | null;
  VehicleId: number;
  creatorId: number | null;
  updaterId: null;
  ProductionId: number;
  Vehicle: DeliveryVehicle;
  Production: DeliveryProduction;
}

export interface DeliveryProduction {
  id: number;
  Sale: DeliverySale;
}

export interface DeliverySale {
  id: number;
  location: string;
  sideContact: string;
  orderDate: Date | null;
  Product: DeliveryProduct;
}

export interface DeliveryProduct {
  id: number;
  name: string;
}

export interface DeliveryVehicle {
  id: number;
  plateNumber: string;
  status: number;
  driver: Driver;
}

export interface Driver {
  firstName: string;
  lastName: string;
}

export interface Stats {
  sale: {
    totalSale: number;
    totalSaleLastWeek: number;
    salePerChange: number;
    SaleCount: number;
  };
  purchase: {
    totalPurchase: number;
    totalPurchaseLastWeek: number;
    purchasePercChange: number;
    purchaseCount: number;
  };
  profit: {
    totalProfit: number;
    totalProfitLastWeek: number;
    profitPercentageChange: number;
  };
}

export interface RevenueChart {
  monthlySales: number[];
  monthlyPurchases: number[];
}

export interface SalesByCategory {
  productName: string[] | 0;
  productQuantity: number[] | 0;
}


export interface DashboardData {
  stats: Stats;
  revenueChart: RevenueChart;
  salesByCategory: SalesByCategory;
}