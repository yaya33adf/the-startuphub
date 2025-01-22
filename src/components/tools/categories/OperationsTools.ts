import { Tool } from "../types/ToolTypes";
import { Package, Warehouse, Truck } from "lucide-react";

export const operationsTools: Tool[] = [
  {
    title: "Inventory Management",
    description: "Track and manage your inventory levels",
    icon: Package,
    path: "/tools/inventory-management",
    active: true
  },
  {
    title: "Warehouse Management",
    description: "Optimize warehouse operations and storage",
    icon: Warehouse,
    path: "/tools/warehouse-management",
    active: true
  },
  {
    title: "Shipping Calculator",
    description: "Calculate shipping costs and delivery times",
    icon: Truck,
    path: "/tools/shipping-calculator",
    active: true
  }
];