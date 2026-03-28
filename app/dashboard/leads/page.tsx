"use client";
import { ResponsiveContainer, FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';

const funnelData = [
  { name: 'New Leads', value: 100, fill: '#1e3a8a' },
  { name: 'Contacted', value: 80, fill: '#3b82f6' },
  { name: 'Qualified', value: 50, fill: '#60a5fa' },
  { name: 'Proposal', value: 30, fill: '#93c5fd' },
  { name: 'Closed', value: 15, fill: '#bfdbfe' },
];

export default function LeadsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Funnel Chart Card */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <Tooltip />
                <Funnel dataKey="value" data={funnelData} isAnimationActive>
                  <LabelList position="right" fill="#333" stroke="none" dataKey="name" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 space-y-4">
            {funnelData.map((stage) => (
              <div key={stage.name} className="flex justify-between items-center text-sm border-b pb-2">
                <span className="font-medium text-slate-700">{stage.name}</span>
                <span className="font-bold">{stage.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="space-y-6">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
             <p className="text-slate-500 text-sm font-medium">Conversion Rate</p>
             <p className="text-4xl font-bold text-green-600 mt-2">28%</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
             <p className="text-slate-500 text-sm font-medium">Active Projects</p>
             <p className="text-4xl font-bold text-blue-600 mt-2">12</p>
           </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[600px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Lead Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Assigned To</th>
              <th className="p-4">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50 cursor-pointer" onClick={() => window.location.href='/dashboard/leads/1'}>
              <td className="p-4 font-medium text-blue-600">Amit Shah</td>
              <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Qualified</span></td>
              <td className="p-4">Tarun</td>
              <td className="p-4">Indiamart</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}