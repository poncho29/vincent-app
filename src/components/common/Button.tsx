import { type HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

import { HeartIcon } from "../icons";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

interface Props extends ButtonProps {
  showIcon?: boolean;
  children: React.ReactNode;
}

const buttonVariants = cva(
  `w-[95px] h-[25px] flex items-center justify-center gap-[5px] text-white
  text-sm font-bold leading-[70px] rounded-[5px] transition-colors duration-300
  lg:w-[140px] lg:h-[40px] lg:gap-[15px] lg:text-lg lg:rounded-lg`,
  {
    variants: {
      variant: {
        default: 'bg-sky hover:bg-skyLight',
        secondary: 'bg-green hover:bg-greenLight',
        outline: 'text-sky bg-transparent border-[2px] border-sky hover:text-white hover:bg-sky',
        outlineSecondary: 'text-white bg-transparent border-[2px] border-white hover:text-sky hover:bg-white',
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

export const Button = ({ className, children, variant = 'default', showIcon = true, ...props }: Props) => {  
  return (
    <button
      { ...props }
      className={cn(buttonVariants({ variant, className }), )}
    >
      { children }
      
      { (variant === 'default' || variant === 'secondary') && showIcon ? (
        <HeartIcon className="size-3 lg:w-[22px] lg:h-[18px]" />
      ) : null }
    </button>
  )
}
