import Link, { type LinkProps } from "next/link";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils";

import { HeartIcon } from "../icons";

type ButtonLinkProps = LinkProps & VariantProps<typeof buttonVariants>;

interface Props extends ButtonLinkProps {
  className?: string;
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

export const ButtonLink = ({
  className,
  children,
  variant = 'default',
  showIcon = true,
  ...props
}: Props) => {
  return (
    <Link
      { ...props }
      className={cn(buttonVariants({ variant, className }), )}
    >
      { children }
      
      { (variant === 'default' || variant === 'secondary') && showIcon ? (
        <HeartIcon className="size-3 lg:w-[22px] lg:h-[18px]" />
      ) : null }
    </Link>
  )
}
