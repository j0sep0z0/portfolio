'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { GrZoomIn } from 'react-icons/gr'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import LocaleSwitcher from '@/components/ui/LocaleSwitcher'

export default function Home() {
  const t = useTranslations('HomePage')
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
        <div className='bg-stone flex flex-wrap items-center  rounded justify-center p-4'>
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
      </header>
      <main onClick={resetImageSize} className='grid grid-cols-1'>
        <section
          id='experience'
          className='flex justify-center mt-16  items-center'
        >
          <div className='sm:max-w-[40rem]'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-xl shadow-xl bg-stone py-2 px-4 rounded self-star w-full'>
                {t('experience')}
              </h1>
              <div className='my-4 shadow-xl bg-stone rounded py-2 px-4 flex flex-col justify-center items-center'>
                <h1 className='self-start my-2 text-xl'>Front End Developer</h1>
                <p className='self-start text-lg font'>
                  Igrowker - Acelerando Juniors IT
                </p>
                <p className='self-start my-2'>{t('dateGoPass')}</p>
                <p className='mt-4 mb-2'>{t('descriptionGoPass')}</p>
                <p className='mt-4 mb-2 self-start'>
                  {t('technologiesUsed')}
                  <br />
                  <br />
                  {t('technologiesGoPass')}
                </p>
                <Link
                  href='https://github.com/igrowker/i003-gopass-front'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='my-2 text-lg rounded py-1 px-2 flex self-end items-center bg-alabaster hover:scale-110 active:scale-100 transition-transform duration-150'
                >
                  Code
                  <FaExternalLinkAlt className='h-3 w-3 ml-4' />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id='projects'
          className='flex justify-center mt-16  items-center'
        >
          <div className='sm:max-w-[40rem]'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-xl shadow-xl py-2 px-4 rounded self-start bg-stone w-full'>
                {t('projects')}
              </h1>
              <div className='my-4 bg-stone shadow-xl rounded py-2 px-4 flex flex-col justify-center items-center'>
                <Image
                  width={1200}
                  height={600}
                  src='/daily-planner-views.png'
                  alt='image of the daily planner app'
                  className={`rounded my-2 transition-transform duration-300 ${
                    isImageExpanded ? 'scale-150 shadow-2xl' : 'scale-100'
                  }`}
                  onClick={toggleImageSize}
                />
                <GrZoomIn
                  className='inset-0 h-5 w-5 cursor-pointer'
                  onClick={toggleImageSize}
                />
                <h1 className='self-start my-2 text-xl'>Daily Planner</h1>
                <p className='self-start text-lg font'>
                  {t('secondTitleDailyPlanner')}
                </p>
                <p className='self-start my-2'>{t('thirdTitleDailyPlanner')}</p>
                <p className='mt-4 mb-2'>{t('descriptionDailyPlanner')}</p>
                <p className='mt-4 mb-2 self-start'>
                  {t('technologiesUsed')}
                  <br />
                  <br />
                  {t('technologiesDailyPlanner')}
                </p>
                <div className='flex justify-center flex-wrap items-center self-end'>
                  <Link
                    href='https://github.com/j0sep0z0/daily-planner'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='my-2 mr-2 text-lg rounded py-1 px-2 flex items-center bg-alabaster hover:scale-110 active:scale-100 transition-transform duration-150'
                  >
                    Code
                    <FaExternalLinkAlt className='h-3 w-3 ml-2' />
                  </Link>
                  <Link
                    href='https://daily-planner-site.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='my-2 text-lg py-1 px-2 flex items-center bg-alabaster rounded hover:scale-110 active:scale-100 transition-transform duration-150'
                  >
                    Visit Site
                    <FaExternalLinkAlt className='h-3 w-3 ml-2' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='about' className='flex justify-center mt-16 items-center'>
          <div className='sm:max-w-[40rem]'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-xl shadow-xl bg-stone py-2 px-4 rounded self-star w-full'>
                {t('aboutMe')}
              </h1>
              <div className='my-4 shadow-xl bg-stone rounded py-2 px-4 flex flex-col justify-center items-center'>
                <p className='my-4'>
                  {t('descriptionAboutMe1')}
                  <br />
                  <br />
                  {t('descriptionAboutMe2')}
                  <br />
                  <br />
                  {t('descriptionAboutMe3')}
                </p>
                <p className='mt-4 mb-2 self-start'>
                  {t('technicalSkills')}
                  <br />
                  <br />
                  {t('myTechnologies')}
                </p>
                <p className='mt-4 mb-2 self-start'>
                  {t('softSkills')}
                  <br />
                  <br />
                  {t('mySoftSkills')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        onClick={resetImageSize}
        className='bg-stone w-full rounded h-24 mt-16 p-4'
      ></footer>
    </>
  )
}
