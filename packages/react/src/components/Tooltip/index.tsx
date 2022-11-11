import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactElement, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

type TooltipPrimitiveProps = ComponentProps<typeof TooltipPrimitive.Root>
export type TooltipProps = TooltipPrimitiveProps &
  ComponentProps<typeof TooltipPrimitive.Content> & {
    children: ReactElement
    content: string | ReactNode
  }

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
