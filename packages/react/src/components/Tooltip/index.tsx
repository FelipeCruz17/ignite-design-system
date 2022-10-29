import { Button } from '../..'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from './styles'

export function Tooltip() {
  return (
    <TooltipProvider>
      <TooltipRoot defaultOpen>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          Teste de tooltip content
          <TooltipArrow />
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}
