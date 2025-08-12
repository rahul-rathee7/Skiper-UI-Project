import React from "react"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const BadgeButton = ({children, Icon, className}) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/30 dark:bg-white bg-black text-base md:left-6 px-5 text-xl"
    >
      {Icon && <Icon className={className} />}
      <span className="text-blue-500">{children}</span>
    </Badge>
  )
}

export default BadgeButton
