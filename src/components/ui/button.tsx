import { Pressable, PressableProps, Text } from 'react-native'
import React from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = {
  title: string
  onPress?: () => void
  theme?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
} & PressableProps

export function Button({
  title,
  onPress,
  theme = 'primary',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'mb-4 flex-row items-center justify-center rounded-md border px-5 py-3',
        {
          'border-sky-600 bg-sky-600': theme === 'primary',
          'border-gray-300 bg-white': theme === 'secondary',
          'border-transparent bg-transparent': theme === 'tertiary',
          'opacity-50': disabled,
        }
      )}
      disabled={disabled}
      {...rest}
    >
      <Text
        className={cn('text-lg font-semibold tracking-wider', {
          'text-black': theme === 'secondary',
          'text-white': theme === 'primary',
          'text-gray-800': theme === 'tertiary',
        })}
      >
        {title} {disabled}
      </Text>
    </Pressable>
  )
}
