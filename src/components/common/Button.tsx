import { type HTMLAttributes } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

import { HeartIcon } from "../icons";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const buttonVariants = cva(
  `w-[95px] h-[25px] flex items-center justify-center gap-[5px] text-white
  text-sm font-bold leading-[70px] rounded-[5px] transition-colors duration-300
  lg:w-[170px] lg:h-[50px] lg:gap-[15px] lg:text-2xl lg:rounded-[15px]`,
  {
    variants: {
      variant: {
        default: 'bg-sky hover:bg-skyLight',
        secondary: 'bg-green hover:bg-greenLight',
        outline: 'text-sky bg-transparent border-[2px] border-sky hover:text-white hover:bg-sky',
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

export const Button = ({ className, children, variant = 'default', ...props }: Props) => {  
  return (
    <button
      { ...props }
      className={cn(buttonVariants({ variant, className }), )}
    >
      { children }
      
      { (variant === 'default' || variant === 'secondary') ? (
        <HeartIcon className="size-3 lg:w-[22px] lg:h-[18px]" />
      ) : null }
    </button>
  )
}
