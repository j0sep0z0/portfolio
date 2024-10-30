import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import LocaleSwitcher from '@/components/ui/LocaleSwitcher'

export const Header = () => {
  return (
    <header className='flex justify-center items-center'>
      <div className='w-[40rem]'>
        <div className='bg-stone flex flex-wrap items-center rounded justify-center p-4'>
          <Avatar className='mx-4 h-32 w-32'>
            <AvatarImage src='./j0sep0z0-gritty.jpg' alt='profile photo' />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className='flex flex-col justify-center items-center mx-4'>
            <h1 className='text-4xl text-center'>JOSE POZO</h1>
            <hr className='border-2 w-full' />
            <h1 className='text-2xl text-center'>FULL SATCK WEB DEVELOPER</h1>
          </div>
        </div>
        <div className='flex justify-center items-center p-2 bg-white'>
          <Link
            className='w-6 h-6 mx-6'
            href={'https://www.linkedin.com/in/j0sep0z0'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='w-6 h-6' />
          </Link>
          <Link
            className='w-6 h-6 mx-6'
            href={'https://github.com/j0sep0z0'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='w-6 h-6' />
          </Link>
        </div>
        <div className='flex bg-stone rounded justify-center items-center flex-wrap p-2'>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
