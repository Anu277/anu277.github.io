import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-background hover:bg-accent-hover',
        secondary:
          'bg-surface-elevated text-text-primary border border-border hover:border-text-muted',
        outline:
          'border border-border text-text-primary hover:border-accent hover:text-accent',
        ghost: 'text-text-primary hover:bg-surface',
        text: 'text-accent hover:text-accent-hover underline-offset-4 hover:underline',
        danger: 'bg-error text-text-primary hover:opacity-90',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-base',
        lg: 'h-13 px-7 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)
