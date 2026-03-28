"use client";
import './globals.css';
import { useState } from 'react';
import { LayoutDashboard, Users, FolderKanban, FileText, Menu, X, UserCircle, Bell } from 'lucide-react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-4 border-b border-slate-700 text-xl font-bold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg"><FileText className="h-5 w-5" /></div>
              <span>CRM System</span>
            </div>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X className="h-5 w-5" /></button>
          </div>
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <SidebarItem href="/dashboard/reports" icon={<LayoutDashboard />} label="Dashboard" />
            <SidebarItem href="/dashboard/leads" icon={<Users />} label="Leads" />
            <SidebarItem href="/dashboard/projects" icon={<FolderKanban />} label="Projects" />
            <SidebarItem href="/dashboard/quotations" icon={<FileText />} label="Quotations" />
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <header className="h-16 bg-white border-b border-slate-200 flex justify-between lg:justify-end items-center px-4 lg:px-6 shrink-0">
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-4 text-slate-600">
              <span className="text-sm font-medium hidden sm:block">Admin User</span>
              <UserCircle className="h-6 w-6 cursor-pointer hover:text-blue-600" />
              <Bell className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="max-w-7xl mx-auto space-y-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

function SidebarItem({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}