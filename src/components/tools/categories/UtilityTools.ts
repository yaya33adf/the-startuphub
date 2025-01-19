import { QrCode, DollarSign } from "lucide-react";
import { Tool } from "../types/ToolTypes";
import { QRCodeGenerator } from "../QRCodeGenerator";
import { CurrencyConverter } from "../CurrencyConverter";

export const utilityTools: Tool[] = [
  {
    title: "QR Code Generator",
    description: "Generate QR codes for text or URLs",
    icon: QrCode,
    component: QRCodeGenerator,
    active: true,
    path: "/tools/qr-code-generator"
  },
  {
    title: "Currency Converter",
    description: "Convert between different currencies with real-time exchange rates",
    icon: DollarSign,
    component: CurrencyConverter,
    active: true,
    path: "/tools/currency-converter"
  }
];