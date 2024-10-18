import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <div className="flex items-center w-full justify-center p-4">
      <Avatar className="mr-4 h-32 w-32">
        <AvatarImage src="./j0sep0z0-gritty.jpg" alt="@shadcn" />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>
      <h1 className="text-grey-700 text-5xl ml-4">JOSE POZO</h1>
    </div>
  )
}
