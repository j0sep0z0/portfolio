import { Contact, Scale } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className='bg-gray-400 flex flex-wrap items-center w-full rounded justify-center p-4'>
        <Avatar className='mx-4 h-32 w-32'>
          <AvatarImage src='./j0sep0z0-gritty.jpg' alt='@shadcn' />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center items-center mx-4'>
          <h1 className='text-4xl text-center'>JOSE POZO</h1>
          <hr className='border-2 w-full' />
          <h2 className='text-2xl text-center'>FULL SATCK WEB DEVELOPER</h2>
        </div>
      </div>
      <div className='bg-gray-100 flex rounded justify-center flex-wrap w-full my-4'>
        <Button
          variant='link'
          className='text-xl hover:scale-110 active:scale-100 transition-transform duration-150'
        >
          Experience
        </Button>
        <Button
          variant='link'
          className='text-xl hover:scale-110 active:scale-100 transition-transform duration-150'
        >
          Projects
        </Button>
        <Button
          variant='link'
          className='text-xl hover:scale-110 active:scale-100 transition-transform duration-150'
        >
          About Me
        </Button>
        <Button
          variant='link'
          className='text-xl hover:scale-110 active:scale-100 transition-transform duration-150'
        >
          Contact
        </Button>
      </div>
    </>
  )
}
