"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactLinks = [
  {
    href: "mailto:josepozovilalta@gmail.com",
    icon: Mail,
    text: "josepozovilalta@gmail.com",
  },
  {
    href: "tel:+34685641043",
    icon: Phone,
    text: "+34 685 64 10 43",
  },
  {
    href: "https://www.google.com/maps?q=Begues+Barcelona",
    icon: MapPin,
    text: "Begues (Barcelona)",
    target: "_blank", // Solo para enlaces externos
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Get in touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-4 ">
                  <Link href={link.href} target={link.target || undefined}>
                    <Button variant="outline" size="icon">
                      <link.icon className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href={link.href}
                    target={link.target || undefined}
                    className="hover:underline text-lg sm:text-xl"
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
