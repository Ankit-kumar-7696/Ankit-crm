"use client";
import { useState } from 'react';
import { Plus, Trash2, Send } from 'lucide-react';

export default function CreateQuotation() {
  const [items, setItems] = useState([{ id: 1, desc: 'Project Splash', qty: 10, price: 5000 }]);

  const addItem = () => setItems([...items, { id: Date.now(), desc: '', qty: 1, price: 0 }]);
  const updateItem = (id: number, field: string, value: any) => setItems(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  const removeItem = (id: number) => setItems(items.filter(i => i.id !== id));
  
  const total = items.reduce((acc, item) => acc + (item.qty * item.price), 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900">Quotation #: QT-1025</h2>
        <p className="text-slate-500 text-sm">Client: ABC Enterprises, Rakesh Mehra</p>
      </div>

      <div className="p-6 overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-slate-500 mb-2">
            <div className="col-span-6">Description</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Unit Price</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          
          <div className="space-y-2">
            {items.map(item => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-center">
                <input className="col-span-6 border rounded p-2 text-sm" value={item.desc} onChange={e => updateItem(item.id, 'desc', e.target.value)} placeholder="Item description..." />
                <input type="number" className="col-span-2 border rounded p-2 text-sm" value={item.qty} onChange={e => updateItem(item.id, 'qty', Number(e.target.value))} />
                <input type="number" className="col-span-2 border rounded p-2 text-sm" value={item.price} onChange={e => updateItem(item.id, 'price', Number(e.target.value))} />
                <div className="col-span-2 flex justify-between items-center text-sm font-medium">
                  ₹{(item.qty * item.price).toLocaleString()}
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={addItem} className="mt-4 text-sm text-blue-600 font-medium flex items-center gap-1"><Plus className="h-4 w-4"/> Add Item</button>
        </div>
      </div>

      <div className="p-6 border-t bg-slate-50 flex justify-between items-center flex-wrap gap-4">
        <div className="text-2xl font-bold">Total: ₹{total.toLocaleString()}</div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2">Send Quote <Send className="h-4 w-4"/></button>
      </div>
    </div>
  );
}