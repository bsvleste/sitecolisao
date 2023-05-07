import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonIconProps {
  children: ReactNode
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
  color?: 'bg-black' | 'bg-yellow' | 'bg-red'
}
function ButtonIcon({ children }: ButtonIconProps) {
  return <Slot className="w-6 h-6">{children}</Slot>
}
function ButtonRoot({
  size = 'sm',
  children,
  asChild,
  className,
  color = 'bg-yellow',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(
        'transition-colors duration-300 flex items-center justify-center gap-2  border-2 rounded-md font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-20',

        {
          ' border-yellow-500 bg-black  text-yellow-500 hover:border-black hover:bg-yellow-500 hover:text-black':
            color === 'bg-black',
          'border-black bg-yellow-500  text-black hover:border-yellow-500 hover:bg-black hover:text-yellow-500':
            color === 'bg-yellow',
          ' border-red-600  text-red-600 hover:bg-red-600 hover:text-black':
            color === 'bg-red',

          'w-28 text-sx py-2 px-2': size === 'sm',
          'w-52 text-sm py-3 px-3': size === 'md',
          'w-full text-md py-4 px-4': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
ButtonRoot.displayName = 'ButtonRoot.Root'
ButtonIcon.displayName = 'ButtonRoot.Icon'
export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
}
