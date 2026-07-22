import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { TooltipPopupState } from "@base-ui/react/tooltip";

export const MyTooltip: React.FC<{ children: React.ReactElement; content: React.ReactNode } & Partial<TooltipPopupState>> = ({ children, content, ...props }) => {
  return (
    <Tooltip>
      <TooltipTrigger render={children} />
      <TooltipContent {...props}>
        {content}
      </TooltipContent>
    </Tooltip>
  )
}
