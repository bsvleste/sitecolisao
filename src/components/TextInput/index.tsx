/* eslint-disable prettier/prettier */
import { InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootsProps {
  children: ReactNode
}
export interface TextInputIconProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputRoot(props: TextInputRootsProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-4 px-3 h-12 rounded-md w-full bg-grays-900',
        'focus-within:ring-2 ring-yellow-500',
      )}
    >
      {props.children}
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-yellow-500">{children}</Slot>
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 outline-none text-grays-400 text-sx placeholder:text-grays-700 focus:text-yellow-500 valid:text-yellow-500 ',
      )}
      {...props}
    />
  )
}
TextInputRoot.displayName = 'TextInput.Root'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displaName = 'TextInput.Input'
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
