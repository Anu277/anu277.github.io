import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/cn'
import { buttonVariants } from '@/components/ui/buttonVariants'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  icon?: ReactNode
}

export function Button({
  className,
  variant,
  size,
  loading,
  icon,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        icon
      )}
      {children}
    </button>
  )
}
