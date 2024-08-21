import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

//by doing this we give phoneProps all the attribute that a normal div element has:
interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string
    dark?: boolean
}

const Phone = ({imgSrc, className, dark = false, ...props}: PhoneProps) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}
    {...props}>
      <img  src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"} 
            alt="phone image" 
            className='pointer-events-none z-50 select-none'  />

    </div>
  )
}

export default Phone
