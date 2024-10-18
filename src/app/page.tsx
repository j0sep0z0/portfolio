import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <Avatar className='w-40 h-40'>
        <AvatarImage src='./j0sep0z0-gritty.jpg' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
