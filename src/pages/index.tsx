import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='w-screen h-screen flex justify-center relative'>
        <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none">
          <Image src="/images/splash-screen.png" alt="background-image" fill />
        </div>
        <Link href="/start-screen" className='flex flex-col items-center z-10 h-max cursor-pointer' style={{marginTop:"25vh"}}>
            <div className="logo-container-1 aspect-logo z-50">
              <Image src="/images/newsmast-logo-md.png" alt="newsmast-logo" fill />
            </div>
            <h3 className="mt-3 text-2xl font-bold">Newsmast</h3>
        </Link>
        
      </main>
    </>
  )
}
