'use client'

import AdminLayout from '@/components/adminlayout/main'


export default function AdminPanelPage() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Welcome to the Admin Panel</h1>
      <p className="text-gray-600">Choose an action from the menu on the left.</p>
    </AdminLayout>
  )
}