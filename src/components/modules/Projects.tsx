import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GrZoomIn } from 'react-icons/gr'

type ProjectsProps = {
  setIsImageExpanded: (value: boolean) => void
  isImageExpanded: boolean
}

export const Projects = ({
  setIsImageExpanded,
  isImageExpanded,
}: ProjectsProps) => {
  const t = useTranslations('HomePage')

  const toggleImageSize = (e: React.MouseEvent) => {
    e.stopPropagation() // Evita que el evento se propague al contenedor principal
    setIsImageExpanded(!isImageExpanded)
  }

  return (
    <section id='projects' className='flex justify-center mt-16  items-center'>
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
              className={`rounded my-2 transition-transform duration-300 hover:cursor-pointer ${
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
                {t('code')}
                <FaExternalLinkAlt className='h-3 w-3 ml-2' />
              </Link>
              <Link
                href='https://daily-planner-site.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='my-2 text-lg py-1 px-2 flex items-center bg-alabaster rounded hover:scale-110 active:scale-100 transition-transform duration-150'
              >
                {t('visitSite')}
                <FaExternalLinkAlt className='h-3 w-3 ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
