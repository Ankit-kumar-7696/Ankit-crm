export default function ReportsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-sm">
        <h3 className="text-sm font-medium opacity-80">Leads Conversion Rate</h3>
        <p className="text-4xl font-bold mt-2">28%</p>
      </div>
      <div className="bg-green-600 text-white p-6 rounded-xl shadow-sm">
        <h3 className="text-sm font-medium opacity-80">Projects Status</h3>
        <p className="text-4xl font-bold mt-2">08 <span className="text-lg font-normal">On Track</span></p>
      </div>
      <div className="md:col-span-2 bg-orange-500 text-white p-6 rounded-xl shadow-sm flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium opacity-80">Revenue This Month</h3>
          <p className="text-4xl font-bold mt-2">₹12,66,000</p>
        </div>
      </div>
    </div>
  );
}