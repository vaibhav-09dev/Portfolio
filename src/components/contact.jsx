"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import Link from "next/link"
import { FaRegPaperPlane } from "react-icons/fa"
import { Mail, MapPin, Phone } from "lucide-react"
import { set } from "mongoose"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "saad@example.com",
    href: "mailto:saad@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
]

export function Contact() {
  const [user, setuser] = useState({
    Name: "",
    email: "",
    message: ""
  })
  const [loading, setloading] = useState(false)
  const Send = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await axios.post("https://vabhsinghdev-nu.vercel.app/api/ConsumerData", user).then((res) => {
              
        toast.success(res.data.message);
        setuser({
          Name: "",
          email: "",
          message: "",

        });

      }).catch((error) => {
        toast.error(error.response.data.message || "Error adding user");
        setuser({
          Name: "",
        email: "",
        message :""
        })

      })
      await axios.get("https://vabhsinghdev-nu.vercel.app/api/Sendmail");

    }
    catch (error) {
      
      setuser({
        Name: "",
        email: "",
        message :""
      })

    }
    setloading(false);
  };
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        
        theme="dark"

      />
    <section id="contact" className="py-22 ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold  text-[#bc0000] mb-6"><span className="cursor-target"  >Get In Touch  </span></h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:space-y-9 space-y-6 px-1 sm:px-8 md:px-44 md:font-semibold"
          >
            
            <p className="text-gray-400 leading-relaxed md:text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or
              just want to chat about technology, feel free to reach out.
            </p>
<div className=" ml-4 ">
                  {[
                    { icon: Mail, text: "vabhsingh@gmail.com", link: "mailto:vabhsingh@gmail.com" },

                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex "
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        animate={{ rotate: [0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <item.icon className="h-8 w-8 text-red-900 mr-4" />
                      </motion.div>
                      <Link href={item.link}><span className="text-gray-200 text-xl">{item.text}</span></Link>
                    </motion.div>
                  ))}
                </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <form className="space-y-4 px-2 sm:px-8 md:px-44" onSubmit={Send}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      value={user.Name}
      onChange={(e) => setuser({ ...user, Name: e.target.value })}
      placeholder="Enter Your Full Name"
      className=" backdrop-blur-md h-11 w-full px-3 rounded-2xl border border-gray-700 text-gray-800 placeholder:text-gray-500 focus:border-blue-400 transition-colors"
    />
    <input
      type="email"
      value={user.email}
      onChange={(e) => setuser({ ...user, email: e.target.value })}
      placeholder="Enter Your Email"
      className=" backdrop-blur-md h-11 w-full px-3 rounded-2xl border border-gray-700 text-gray-800 placeholder:text-gray-500 focus:border-blue-400 transition-colors"
    />
  </div>
  <textarea
    placeholder="Enter Your Message"
    value={user.message}
    onChange={(e) => setuser({ ...user, message: e.target.value })}
    rows={5}
    className=" backdrop-blur-md w-full px-3 py-2 rounded-2xl text-lg border border-gray-700 text-gray-800 placeholder:text-gray-500 focus:border-blue-400 transition-colors"
  />
  <button
    type="submit"
    disabled={loading}
    onClick={Send}
    className="w-full h-11 bg-gray-700 flex justify-center items-center text-white rounded-2xl font-semibold"
  >
    {loading ? "Sending..." : "Send Message"} <span className="ml-2 text-white font-bold"> <FaRegPaperPlane size={24} /> </span>
  </button>
</form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}
