'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GrZoomIn } from 'react-icons/gr'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded)
  }

  const resetImageSize = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName !== 'IMG' && isImageExpanded) {
      setIsImageExpanded(false)
    }
  }

  return (
    <>
      <header onClick={resetImageSize}>
        <div className='bg-gray-400 flex flex-wrap items-center w-full rounded justify-center p-4'>
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
      </header>
      <main onClick={resetImageSize}>
        <section
          id='experience'
          className='flex justify-center mt-16 items-center'
        >
          <div className='sm:max-w-[40rem]'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-xl shadow-xl text-white py-2 px-4 rounded self-start bg-gray-400 w-full'>
                Experience
              </h1>
              <div className='my-4 bg-gray-200 shadow-xl rounded py-2 px-4 flex flex-col justify-center items-center'>
                <h1 className='self-start my-2 text-xl'>Front End Developer</h1>
                <p className='self-start text-lg font'>
                  Igrowker - Acelerando Juniors IT
                </p>
                <p className='self-start my-2'>
                  [ September 2024 – Present | Remote | Valencia, Spain ]
                </p>
                <p className='my-2'>
                  Development of "GoPass," a secure platform aimed at combating
                  the growing issue of illegal ticket resale in Argentine
                  football. This innovative project ensures the authenticity of
                  each ticket, providing a trustworthy solution for fans and
                  organizers alike.
                </p>
                <p className='my-2 self-start'>
                  React, TypeScript, Redux Toolkit, Axios, Tailwind CSS, Git,
                  GitHub.
                </p>
                <Link
                  href='https://github.com/igrowker/i003-gopass-front'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-800 my-2 text-xl bg-gray-100 hover:bg-gray-400 hover:text-white rounded py-1 px-2 flex self-end items-center'
                >
                  GoPass
                  <FaExternalLinkAlt className='h-4 w-4 text-blue-800 ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id='projects'
          className='flex justify-center mt-16 items-center'
        >
          <div className='sm:max-w-[40rem]'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-xl shadow-xl text-white py-2 px-4 rounded self-start bg-gray-400 w-full'>
                Projects
              </h1>
              <div className='my-4 bg-gray-200 shadow-xl rounded py-2 px-4 flex flex-col justify-center items-center'>
                <Image
                  width={1200}
                  height={600}
                  src='/daily-planner-views.png'
                  alt='Daily Planner Views'
                  className={`rounded my-2 transition-transform duration-300 ${
                    isImageExpanded ? 'scale-150 shadow-2xl' : 'scale-100'
                  }`}
                  onClick={toggleImageSize}
                />
                <GrZoomIn
                  className='inset-0 h-5 w-5 text-gray-800 cursor-pointer'
                  onClick={toggleImageSize}
                />
                <h1 className='self-start my-2 text-xl'>Daily Planner</h1>
                <p className='self-start text-lg font'>
                  Final Project of the Full Stack Web Development Bootcamp
                </p>
                <p className='self-start my-2'>
                  [ Currently improving the app and implementing TypeScript and
                  Redux ]
                </p>
                <p className='my-2'>
                  Designed to optimize the daily management of salons and beauty
                  centers. It allows scheduling appointments, managing clients
                  and services, and offers a complete history of the activities
                  performed.
                </p>
                <Link
                  href='https://daily-planner-site.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-800 my-2 text-xl bg-gray-100 hover:bg-gray-400 hover:text-white rounded py-1 px-2 flex self-end items-center'
                >
                  Daily Planner
                  <FaExternalLinkAlt className='h-4 w-4 text-blue-800 ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        onClick={resetImageSize}
        className='bg-gray-400 w-full rounded h-24 mt-16 p-4'
      ></footer>
    </>
  )
}
