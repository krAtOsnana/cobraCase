import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button';
import { ArrowRight, LogIn } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar =async () => {
    const { getUser } = getKindeServerSession()
    const user =  await getUser()
    
    const isAdmin = user?.email===process.env.ADMIN_EMAIL;
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b 
    border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div  className='flex h-14 items-center justify-between border-b border-zinc-200'>
            {/* link is just like an anchor tag under the hood */}
             <Link href='/' className='flex z-40 font-semibold'> 
                Case<span className='text-green-600'> Cobra</span>
            </Link>
            <div className='h-full flex items-center space-x-4'>
                {user ? 
                (
                    <>
                    {/* if user already login then show logout button */}
                    <Link href='/api/auth/logout ' className={buttonVariants({
                        size:'lg',
                        variant:'ghost'
                    })}>Sign out</Link>

                    {isAdmin ? <Link href='/api/auth/logout ' className={buttonVariants({
                        size:'lg',
                        variant:'ghost'
                    })}>Dashboard📊</Link> : null}

                    <Link href='/configure/upload ' className={buttonVariants({
                        size:'lg',
                        className:"hidden sm:flex items-center gap-1"
                    })}>Create Case
                    <ArrowRight className='ml-1.5 h-5 w-5 text-green-600' />
                    </Link>
                    </>
                ) 
                : 
                (
                    <>
                    {/* if user already login then show logout button */}
                    <Link href='/api/auth/register ' className={buttonVariants({
                        size:'lg',
                        variant:'ghost'
                    })}>Sign Up</Link>

                    

                    <Link href='/api/auth/login ' className={buttonVariants({
                        size:'lg',
                        variant:'ghost'
                    })}>LogIn
                    <LogIn className='ml-1.5 h-5 w-5 text-green-600' />
                    </Link>

                    <div className='h-8 w-px bg-zinc-200 hidden sm:block'/>

                    <Link href='/configure/upload ' className={buttonVariants({
                        size:'lg',
                        className:"hidden sm:flex items-center gap-1 "
                    })}>Create Case
                    <ArrowRight className='ml-1.5 h-5 w-5 text-green-600' />
                    </Link>
                    </>
                ) }
            </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
