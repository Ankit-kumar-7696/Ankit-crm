export default function ProjectDetail() {
  const tasks = [
    { name: 'Design Phase', start: 1, w: 3, color: 'bg-blue-500' },
    { name: 'Material Procurement', start: 3, w: 2, color: 'bg-indigo-500' },
    { name: 'Construction', start: 5, w: 4, color: 'bg-green-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-4 bg-slate-900 text-white flex justify-between rounded-t-xl">
        <h2 className="font-semibold">Project: Mehrra Residence</h2>
        <span className="bg-blue-600 text-xs px-2 py-1 rounded">In Progress</span>
      </div>
      <div className="p-6 overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-12 gap-2 border-b-2 pb-2 mb-4 font-bold text-sm">
            <div className="col-span-4">Task</div>
            <div className="col-span-8 grid grid-cols-8 text-center text-xs text-slate-500">
              {[...Array(8)].map((_, i) => <div key={i}>W{i+1}</div>)}
            </div>
          </div>
          {tasks.map((task, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 py-3 items-center border-b">
              <div className="col-span-4 text-sm font-medium">{task.name}</div>
              <div className="col-span-8 grid grid-cols-8 h-6 bg-slate-100 rounded relative">
                <div className={`absolute h-full rounded ${task.color}`} style={{ gridColumnStart: task.start, gridColumnEnd: task.start + task.w }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}