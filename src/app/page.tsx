import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <div className="flex w-full justify-center">
      <Avatar className=" h-40 w-40">
        <AvatarImage src="./j0sep0z0-gritty.jpg" alt="@shadcn" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>
    </div>
  )
}
