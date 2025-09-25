"use client"

import { motion } from "framer-motion"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const contactInfo = [
  {
    icon: <WhatsAppIcon className="h-5 w-5" />,
    title: "WhatsApp",
    detail: "+91 92896 77469",
    action: "https://wa.me/919289677469?text=Hi, I need spiritual guidance",
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    title: "Phone",
    detail: "+91 92896 77469",
    action: "tel:+919289677469",
  },
  {
    icon: <EmailIcon className="h-5 w-5" />,
    title: "Email",
    detail: "spiritual@divineconnect.com",
    action: "mailto:spiritual@divineconnect.com",
  },
  {
    icon: <LocationOnIcon className="h-5 w-5" />,
    title: "Address",
    detail: "Haridwar, Uttarakhand",
    action: "https://maps.google.com/?q=Haridwar,Uttarakhand",
  },
]

export default function ContactUsInfo() {
  const handleContactClick = (action) => {
    if (action) {
      window.open(action, "_blank")
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-gray-600">Get in touch for spiritual guidance and consultation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // Changed grid-cols-4 to grid-cols-2 for two columns on medium and larger screens
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
              onClick={() => handleContactClick(info.action)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-gray-100 rounded-full text-gray-600">{info.icon}</div>
                <h3 className="font-medium text-gray-900 text-sm">{info.title}</h3>
                <p className="text-xs text-gray-600 break-all">{info.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
