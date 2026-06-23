// 'use client'

// import React from 'react'
// import Link from 'next/link'

// interface ButtonProps {
//   href: string
//   variant: 'primary' | 'secondary' | 'white'
//   children: React.ReactNode
//   className?: string
//   shimmer?: boolean
// }

// const Button: React.FC<ButtonProps> = ({ href, variant, children, className = '', shimmer = false }) => {
//   const baseStyles = "relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium transition-all duration-300"
  
//   const variantStyles = {
//     primary: "bg-[#356bff] text-white hover:bg-[#2e5ee6] hover:shadow-lg",
//     secondary: "bg-transparent text-[#356bff] border-2 border-[#356bff] hover:bg-[#356bff] hover:text-white",
//     white: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#356bff]"
//   }

//   const shimmerStyles = shimmer ? 
//     "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent overflow-hidden" 
//     : ""

//   return (
//     <Link 
//       href={href} 
//       className={`${baseStyles} ${variantStyles[variant]} ${shimmerStyles} ${className}`}
//     >
//       <span className="relative z-10 flex items-center gap-2">{children}</span>
//     </Link>
//   )
// }

// export default Button

'use client'

import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  href?: string // 1. Change to optional (?) so it doesn't crash when missing
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void // 2. Add support for onClick actions
  variant: 'primary' | 'secondary' | 'white'
  children: React.ReactNode
  className?: string
  shimmer?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  onClick, 
  variant, 
  children, 
  className = '', 
  shimmer = false 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium transition-all duration-300 cursor-pointer"
  
  const variantStyles = {
    primary: "bg-[#356bff] text-white hover:bg-[#2e5ee6] hover:shadow-lg",
    secondary: "bg-transparent text-[#356bff] border-2 border-[#356bff] hover:bg-[#356bff] hover:text-white",
    white: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#356bff]"
  }

  const shimmerStyles = shimmer ? 
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent overflow-hidden" 
    : ""

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${shimmerStyles} ${className}`

  // 3. If an href is provided, render the standard Next.js Link
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    )
  }

  // 4. Fallback: If no href is passed, render a regular HTML button with the onClick handler
  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

export default Button