'use client';
import Link from 'next/link';

export default function QuotationsList() {
  const quotations = [
    { id: 1, number: 'QT-1025', client: 'ABC Enterprises', amount: 250000, status: 'Pending', date: '2024-03-20' },
    { id: 2, number: 'QT-1024', client: 'Dev Group', amount: 175000, status: 'Approved', date: '2024-03-18' },
    { id: 3, number: 'QT-1023', client: 'Rakesh Mehra', amount: 520000, status: 'Sent', date: '2024-03-15' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Quotations</h1>
        <Link href="/dashboard/quotations/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
          + Create Quotation
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[600px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Quotation #</th>
              <th className="p-4">Client</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {quotations.map((quotation) => (
              <tr key={quotation.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-blue-600">{quotation.number}</td>
                <td className="p-4">{quotation.client}</td>
                <td className="p-4 font-medium">₹{quotation.amount.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    quotation.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    quotation.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {quotation.status}
                  </span>
                </td>
                <td className="p-4 text-slate-600">{quotation.date}</td>
                <td className="p-4">
                  <Link href={`/dashboard/quotations/new`} className="text-blue-600 hover:underline text-xs font-medium">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
