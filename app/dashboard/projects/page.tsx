'use client';
import Link from 'next/link';

export default function ProjectsList() {
  const projects = [
    { id: 1, name: 'Mehrra Residence', status: 'In Progress', client: 'Rakesh Mehra', startDate: '2024-01-15' },
    { id: 2, name: 'Skyline Plaza', status: 'Planning', client: 'ABC Enterprises', startDate: '2024-02-01' },
    { id: 3, name: 'Green Valley', status: 'On Hold', client: 'Dev Group', startDate: '2023-11-20' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">+ New Project</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[600px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-4">Project Name</th>
              <th className="p-4">Client</th>
              <th className="p-4">Status</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50">
                <td className="p-4 font-medium text-blue-600">
                  <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
                    {project.name}
                  </Link>
                </td>
                <td className="p-4">{project.client}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'In Progress' ? 'bg-green-100 text-green-700' :
                    project.status === 'Planning' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4 text-slate-600">{project.startDate}</td>
                <td className="p-4">
                  <Link href={`/dashboard/projects/${project.id}`} className="text-blue-600 hover:underline text-xs font-medium">
                    View
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
