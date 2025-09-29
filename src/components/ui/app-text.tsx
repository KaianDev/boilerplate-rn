import { Text } from 'react-native'
import { cn } from '../../utils/cn'

type AppTextProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'heading'
  bold?: boolean
  color?: 'primary' | 'secondary' | 'tertiary'
  center?: boolean
  className?: string
}

export function AppText({
  children,
  size = 'medium',
  bold = false,
  color = 'primary',
  center = false,
  className,
}: AppTextProps) {
  return (
    <Text
      className={cn({
        'mb-2 text-sm': size === 'small',
        'mb-3 text-base': size === 'medium',
        'mb-4 text-lg': size === 'large',
        'mb-5 text-xl': size === 'heading',
        'font-bold': bold,
        'text-center': center,
        'text-black': color === 'primary',
        'text-gray-500': color === 'secondary',
        'text-gray-400': color === 'tertiary',
        className,
      })}
    >
      {children}
    </Text>
  )
}
