import { Skeleton } from "@mui/material"
import Navbar from "@/components/navbar"

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {/* Header Skeleton */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Skeleton variant="rectangular" width="60%" height={48} className="mx-auto mb-4 bg-white/20" />
              <Skeleton variant="rectangular" width="80%" height={24} className="mx-auto bg-white/20" />
              <div className="mt-8 flex justify-center">
                <Skeleton variant="rectangular" width="60%" height={56} className="rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Skeleton */}
              <div className="w-full lg:w-1/4 hidden lg:block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                  <Skeleton variant="rectangular" width="100%" height={400} className="rounded-lg" />
                </div>
              </div>

              {/* Results Skeleton */}
              <div className="w-full lg:w-3/4">
                <div className="flex items-center justify-between mb-6">
                  <Skeleton variant="rectangular" width={200} height={32} className="rounded-lg" />
                  <Skeleton variant="rectangular" width={150} height={40} className="rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-border h-full"
                    >
                      <div className="p-6 pb-4">
                        <div className="flex items-start space-x-4">
                          <Skeleton variant="circular" width={80} height={80} />
                          <div className="flex-1">
                            <Skeleton variant="rectangular" width="80%" height={24} className="mb-2 rounded" />
                            <Skeleton variant="rectangular" width="60%" height={20} className="mb-2 rounded" />
                            <Skeleton variant="rectangular" width="40%" height={16} className="rounded" />
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-4">
                        <div className="flex gap-2">
                          <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
                          <Skeleton variant="rectangular" width={80} height={24} className="rounded-full" />
                          <Skeleton variant="rectangular" width={70} height={24} className="rounded-full" />
                        </div>
                      </div>
                      <div className="px-6 pb-4">
                        <Skeleton variant="rectangular" width="100%" height={60} className="rounded" />
                      </div>
                      <div className="p-6 pt-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                          <Skeleton variant="rectangular" width={80} height={40} className="rounded" />
                          <Skeleton variant="rectangular" width={60} height={24} className="rounded" />
                        </div>
                        <div className="flex gap-2">
                          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-lg" />
                          <Skeleton variant="rectangular" width="100%" height={40} className="rounded-lg" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
