import React, { ReactNode, ComponentType, SVGProps } from "react";
import { Badge } from "@/components/ui/badge";

interface BadgeButtonProps {
  children: ReactNode;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

const BadgeButton: React.FC<BadgeButtonProps> = ({ children, Icon, className }) => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-[14px] border border-black/30 dark:bg-white bg-black text-base md:left-6 px-5 text-xl"
    >
      {Icon && <Icon className={className} />}
      <span className="text-blue-500">{children}</span>
    </Badge>
  );
};

export default BadgeButton;
