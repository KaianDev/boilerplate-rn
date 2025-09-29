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
        'flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border',
        {
          'bg-sky-600 border-sky-600': theme === 'primary',
          'bg-white border-gray-300': theme === 'secondary',
          'bg-transparent border-transparent': theme === 'tertiary',
          'opacity-50': disabled,
        }
      )}
      disabled={disabled}
      {...rest}
    >
      <Text
        className={cn('font-semibold text-lg tracking-wider', {
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
