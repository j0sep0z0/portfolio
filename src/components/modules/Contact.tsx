'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export function Contact() {
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title'>Contact</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className='overflow-hidden card-hover'>
            <CardHeader>
              <CardTitle className='text-xl font-semibold'>
                Get in touch
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center gap-4'>
                <Link href='mailto:josepozovilalta@gmail.com'>
                  <Button variant='outline' size='icon'>
                    <Mail className='h-4 w-4' />
                  </Button>
                </Link>
                <Link href='mailto:josepozovilalta@gmail.com' className='hover:underline'>
                  josepozovilalta@gmail.com
                </Link>
              </div>
              <div className='flex items-center gap-4'>
                <Link href='tel:+34685641043'>
                  <Button variant='outline' size='icon'>
                    <Phone className='h-4 w-4' />
                  </Button>
                </Link>
                <Link href='tel:+34685641043' className='hover:underline'>
                  +34 685 64 10 43
                </Link>
              </div>
              <div className='flex items-center gap-4'>
                <Link href='https://www.google.com/maps?q=Begues+Barcelona'>
                  <Button variant='outline' size='icon' className='no-hover'>
                    <MapPin className='h-4 w-4' />
                  </Button>
                </Link>
                <Link href='https://www.google.com/maps?q=Begues+Barcelona' target='_blank'  className='hover:underline'>
                  Begues (Barcelona)
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
