import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Experience = () => {
  const t = useTranslations('HomePage')

  return (
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
              {t('code')}
              <FaExternalLinkAlt className='h-3 w-3 ml-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
