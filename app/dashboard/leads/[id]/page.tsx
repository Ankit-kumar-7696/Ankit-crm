import { Phone, Mail, Globe } from 'lucide-react';

export default function LeadDetail() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Detail Panel */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 bg-slate-50 border-b flex items-center gap-4">
          <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">RM</div>
          <div>
            <h1 className="text-2xl font-bold">ABC Enterprises</h1>
            <p className="text-slate-500">Rakesh Mehra</p>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border-b">
          <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> +91 9876543210</div>
          <div className="flex items-center gap-2"><Globe className="h-4 w-4"/> Source: Indiamart</div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between border-b pb-2"><span className="text-slate-500">Budget</span><span className="font-semibold">₹15-20 Lakh</span></div>
          <div className="flex justify-between border-b pb-2"><span className="text-slate-500">Timeline</span><span className="font-semibold">3 Months</span></div>
          <div className="flex justify-between pb-2"><span className="text-slate-500">Preferred Style</span><span className="font-semibold">Modern, Minimalist</span></div>
        </div>
      </div>

      {/* Mobile Site Survey App Mockup */}
      <div className="bg-white rounded-[2rem] shadow-lg border-4 border-slate-800 overflow-hidden relative w-full max-w-sm mx-auto">
        <div className="bg-blue-600 text-white p-6 pt-8 text-center font-bold">Site Survey</div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Type of Work</label>
            <select className="w-full border rounded-lg p-2 text-sm"><option>Modular Kitchen</option></select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">Budget</label>
            <input type="text" defaultValue="₹18,00,000" className="w-full border rounded-lg p-2 text-sm" />
          </div>
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl mt-4">Save & Submit</button>
        </div>
      </div>
    </div>
  );
}