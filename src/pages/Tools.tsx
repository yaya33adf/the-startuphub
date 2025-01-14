import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  QrCode, 
  DollarSign, 
  FileSpreadsheet, 
  BarChart3, 
  Mail, 
  Target, 
  Users, 
  Receipt, 
  CalendarDays,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { QRCodeGenerator } from "@/components/tools/QRCodeGenerator";
import { CurrencyConverter } from "@/components/tools/CurrencyConverter";
import { InvoiceGenerator } from "@/components/tools/InvoiceGenerator";
import { ExpenseTracker } from "@/components/tools/ExpenseTracker";
import { SalesAnalytics } from "@/components/tools/SalesAnalytics";

const Tools = () => {
  const tools = [
    {
      title: "QR Code Generator",
      description: "Generate QR codes for text or URLs",
      icon: QrCode,
      component: QRCodeGenerator,
      active: true,
    },
    {
      title: "Currency Converter",
      description: "Convert between different currencies with real-time exchange rates",
      icon: DollarSign,
      component: CurrencyConverter,
      active: true,
    },
    {
      title: "Invoice Generator",
      description: "Create professional invoices for your business",
      icon: Receipt,
      component: InvoiceGenerator,
      active: true,
    },
    {
      title: "Expense Tracker",
      description: "Track and categorize your business expenses",
      icon: FileSpreadsheet,
      component: ExpenseTracker,
      active: true,
    },
    {
      title: "Sales Analytics",
      description: "Visualize and analyze your sales data",
      icon: BarChart3,
      component: SalesAnalytics,
      active: true,
    },
    {
      title: "Email Campaign Manager",
      description: "Create and manage email marketing campaigns",
      icon: Mail,
      active: false,
    },
    {
      title: "Goal Tracker",
      description: "Set and track business goals and KPIs",
      icon: Target,
      active: false,
    },
    {
      title: "Team Management",
      description: "Manage team members and assignments",
      icon: Users,
      active: false,
    },
    {
      title: "Appointment Scheduler",
      description: "Schedule and manage business appointments",
      icon: CalendarDays,
      active: false,
    },
  ];

  // Filter to show only tools with active components
  const activeTools = tools.filter(tool => tool.active);
  const inactiveTools = tools.filter(tool => !tool.active);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Business Tools</h1>
        <p className="text-muted-foreground">
          Essential tools to help you manage and grow your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTools.map((tool) => (
          <Card key={tool.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <tool.icon className="h-6 w-6 text-primary" />
                <CardTitle className="flex-1">{tool.title}</CardTitle>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{tool.description}</CardDescription>
              {tool.component && <tool.component />}
            </CardContent>
          </Card>
        ))}
      </div>

      {inactiveTools.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-12 mb-6">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-70">
            {inactiveTools.map((tool) => (
              <Card key={tool.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <tool.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="flex-1">{tool.title}</CardTitle>
                    <XCircle className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      <div className="mt-12 text-center text-muted-foreground">
        <p>More business tools coming soon...</p>
      </div>
    </div>
  );
};

export default Tools;