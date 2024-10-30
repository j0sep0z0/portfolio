import { useTranslations } from 'next-intl'

export const AboutMe = () => {
  const t = useTranslations('HomePage')

  return (
    <section id='about' className='flex justify-center mt-16 mb-8 items-center'>
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
  )
}
