"use client"
import { useMemo, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import axios from "axios"
import { Cylinder, Float, Sphere } from "@react-three/drei"
import { ToastContainer, toast } from 'react-toastify';
import { Suspense } from "react"
import Link from "next/link"
import { FaRegPaperPlane } from "react-icons/fa"

function FloatingCylinder({ position, color }) {
  return (
    <Float speed={1.4} rotationIntensity={2} floatIntensity={3}>
      <Cylinder args={[0.3, 0.3, 1, 32]} position={position}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
      </Cylinder>
    </Float>
  )
}

function MessageBubbles() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        key: i,
        speed: 0.5 + Math.random(),
        radius: 0.1 + Math.random() * 0.2,
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          -5 - Math.random() * 8,
        ],
      })),
    []
  )
  return (
    <>
      {bubbles.map((bubble) => (
        <Float key={bubble.key} speed={bubble.speed} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[bubble.radius, 16, 16]} position={bubble.position}>
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} emissive="#1e40af" emissiveIntensity={0.2} />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

function ConnectingLines() {
  const lines = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        key: i,
        rotation: [0, 0, (i * Math.PI) / 4],
      })),
    []
  )
  return (
    <>
      {lines.map((line) => (
        <Float key={line.key} speed={0.3} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[0, 0, -6]} rotation={line.rotation}>
            <cylinderGeometry args={[0.02, 0.02, 8, 8]} />
            <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} emissive="#1e40af" emissiveIntensity={0.1} />
          </mesh>
        </Float>
      ))}
    </>
  )
}
export function Contact() {
  const [user, setuser] = useState({
    Name: "",
    email: "",
    message: ""
  })
    const [loading, setLoading] = useState(false);
  const Send = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://vaibhavdev-eight.vercel.app/api/ConsumerData", user).then((res) => {
              
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
      await axios.get("https://vaibhavdev-eight.vercel.app/api/Sendmail");

    }catch (err) {
      
      setuser({
        Name: "",
        email: "",
        message :""
      })

    }
        setLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

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
      <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Animated Communication Network */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
            radial-gradient(circle at 20% 20%, #3b82f6 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, #8b5cf6 2px, transparent 2px),
            radial-gradient(circle at 40% 60%, #06b6d4 2px, transparent 2px)
          `,
              backgroundSize: "100px 100px",
              animation: "pulse 3s ease-in-out infinite",
            }}
          ></div>
        </div>

        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[-10, -10, -10]} color="#8b5cf6" />
              <FloatingCylinder position={[-4, 2, -2]} color="#3b82f6" />
              <FloatingCylinder position={[4, -1, -1]} color="#8b5cf6" />
              <FloatingCylinder position={[0, 3, -3]} color="#06b6d4" />
              <MessageBubbles />
              <ConnectingLines />
            </Suspense>
          </Canvas>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl sm:text-6xl font-bold text-center mb-12" variants={itemVariants}>
              Get In <span className="text-blue-400">Touch</span>
            </motion.h2>

            <div className="flex flex-col gap-12 ">
              <motion.div variants={itemVariants}>

                <motion.p
                  className="text-gray-300 md:text-xl mb-8  md:px-44"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Drop me a mail or fill the form . I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </motion.p>

                <div className="space-y-6  md:px-44">
                  {[
                    { icon: Mail, text: "vabhsingh@gmail.com", link: "mailto:vabhsingh@gmail.com" },

                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
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
                        <item.icon className="h-8 w-8 text-blue-400 mr-4" />
                      </motion.div>
                      <Link href={item.link}><span className="text-gray-300 text-lg">{item.text}</span></Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} transition={{ duration: 0.3 }}>
                <div className=" border-gray-800 hover:border-blue-400 transition-all duration-300">
                  <div>
                    <div className="text-white"></div>
                  </div>
                  <div>
                    <form className="space-y-4 px-2 sm:px-8 md:px-20" onSubmit={Send}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      value={user.Name}
      onChange={(e) => setuser({ ...user, Name: e.target.value })}
      placeholder="Enter Your Full Name"
      className="bg-gray-800/70 backdrop-blur-md h-11 w-full px-3 rounded-2xl border border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors"
    />
    <input
      type="email"
      value={user.email}
      onChange={(e) => setuser({ ...user, email: e.target.value })}
      placeholder="Enter Your Email"
      className="bg-gray-800/70 backdrop-blur-md h-11 w-full px-3 rounded-2xl border border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors"
    />
  </div>
  <Textarea
    placeholder="Enter Your Message"
    value={user.message}
    onChange={(e) => setuser({ ...user, message: e.target.value })}
    rows={5}
    className="bg-gray-800/70 backdrop-blur-md w-full px-3 py-2 rounded-2xl text-lg border border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors"
  />
  <button
    type="submit"
    disabled={loading}
    className="w-full h-11 bg-white flex justify-center items-center text-black rounded-2xl font-semibold"
  >
    {loading ? "Sending..." : "Send Message"} <span className="ml-2 text-black font-bold"><FaRegPaperPlane size={24} /></span>
  </button>
</form>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
