"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AccountBalance, Add, History } from "@mui/icons-material"
import { toast, toastTypes } from "@/components/ui/toaster"

export default function WalletCard({ balance, onRecharge }) {
  const [showRechargeModal, setShowRechargeModal] = useState(false)
  const [rechargeAmount, setRechargeAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const predefinedAmounts = [500, 1000, 2000, 5000]

  const handleRecharge = async () => {
    if (!rechargeAmount || rechargeAmount < 100) {
      toast("Minimum recharge amount is ₹100", toastTypes.ERROR)
      return
    }

    setIsLoading(true)
    try {
      // In a real app, this would integrate with Razorpay
      const response = await fetch("/api/wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "101", // This would come from auth context
          amount: Number.parseFloat(rechargeAmount),
          type: "credit",
          description: "Wallet recharge via Razorpay",
        }),
      })

      if (response.ok) {
        toast("Wallet recharged successfully!", toastTypes.SUCCESS)
        setShowRechargeModal(false)
        setRechargeAmount("")
        onRecharge()
      } else {
        throw new Error("Recharge failed")
      }
    } catch (error) {
      toast("Recharge failed. Please try again.", toastTypes.ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <AccountBalance className="h-6 w-6 mr-2" />
            <h3 className="text-lg font-semibold">Wallet Balance</h3>
          </div>
          <button className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
            <History className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-3xl font-bold">₹{balance}</p>
          <p className="text-purple-100 text-sm">Available balance</p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setShowRechargeModal(true)}
            className="flex-1 bg-white text-purple-600 py-2 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
          >
            <Add className="h-5 w-5 mr-1" />
            Recharge
          </button>
          <button className="px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
            History
          </button>
        </div>
      </motion.div>

      {/* Recharge Modal */}
      {showRechargeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-xl max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-semibold mb-4">Recharge Wallet</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Amount</label>
              <input
                type="number"
                value={rechargeAmount}
                onChange={(e) => setRechargeAmount(e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter amount"
                min="100"
              />
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Quick amounts</p>
              <div className="grid grid-cols-2 gap-2">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setRechargeAmount(amount.toString())}
                    className="py-2 px-4 border border-input rounded-lg hover:bg-accent transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowRechargeModal(false)}
                className="flex-1 py-2 px-4 border border-input rounded-lg hover:bg-accent transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRecharge}
                disabled={isLoading}
                className="flex-1 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isLoading ? "Processing..." : "Recharge"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
