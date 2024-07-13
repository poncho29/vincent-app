import type { ButtonHTMLAttributes  } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

import { HeartIcon } from "../icons";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

interface Props extends ButtonProps {
  showIcon?: boolean;
  children: React.ReactNode;
}

const buttonVariants = cva('button',
  {
    variants: {
      variant: {
        default: 'default',
        secondary: 'secondary',
        outline: 'outline',
        outlineSecondary: 'outline-secondary',
      },
      defaultVariants: {
        variant: 'default'
      }
    }
  }
)

export const Button = ({
  className,
  children,
  variant = 'default',
  showIcon = true,
  ...props
}: Props) => {  
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
