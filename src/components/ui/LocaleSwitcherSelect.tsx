'use client'

import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { ChangeEvent, ReactNode, useTransition } from 'react'

import { Locale, usePathname, useRouter } from '@/i18n/routing'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label
      className={clsx(
        'relative',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className='sr-only'>{label}</p>
      <select
        className='inline-flex appearance-none bg-transparent border-2 rounded-md w-36 py-2 px-4 focus:outline-none'
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className='pointer-events-none absolute right-6 top-[5px]'>⌄</span>
    </label>
  )
}