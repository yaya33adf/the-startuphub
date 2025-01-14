import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Receipt, Printer, Plus, Trash2 } from "lucide-react";

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export const InvoiceGenerator = () => {
  const [businessName, setBusinessName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: '', quantity: 1, price: 0 }
  ]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: field === 'description' ? value : Number(value) || 0
    };
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your Business Name"
          />
        </div>
        <div>
          <Label htmlFor="customerName">Customer Name</Label>
          <Input
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer Name"
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-2 mb-2">
              <div className="col-span-5">
                <Input
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  placeholder="Item description"
                />
              </div>
              <div className="col-span-2">
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                  placeholder="Qty"
                  min="1"
                />
              </div>
              <div className="col-span-3">
                <Input
                  type="number"
                  value={item.price}
                  onChange={(e) => updateItem(index, 'price', e.target.value)}
                  placeholder="Price"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="col-span-2 flex items-center justify-end">
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button onClick={addItem} variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
        <div className="text-lg font-semibold">
          Total: ${calculateTotal().toFixed(2)}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handlePrint}>
          <Printer className="h-4 w-4 mr-2" />
          Print Invoice
        </Button>
      </div>
    </div>
  );
};