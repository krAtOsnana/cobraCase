// done by this command: npx shadcn-ui@latest init
// 


import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


//this function is used to merge class name:
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
