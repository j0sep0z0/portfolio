"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden card-hover">
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                Hello, I&apos;m Jose, a creative developer passionate about
                turning ideas into smooth and engaging user experiences. I enjoy
                creating efficient applications that are not only functional but
                also provide a visually appealing experience focused on user
                needs.
              </p>
              <p className="text-lg mb-4">
                In my work, I prioritize clean and maintainable code, and I
                always seek to offer scalable and accessible solutions. I like
                to be constantly learning and enjoy keeping up with web
                development trends, whether it&apos;s mastering new frameworks
                or exploring modern design approaches.
              </p>
              <p className="text-lg">
                When I&apos;m not programming, you can find me enjoying outdoor
                activities, playing sports or sharing moments with friends. I
                value these experiences very much, as they help me to recharge
                my batteries and maintain a balance between personal and
                professional life.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
