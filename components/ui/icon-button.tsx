import { MouseEventHandler } from "react"; // Ensure this import is present
import { cn } from "@/lib/utils";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>; // Change this to HTMLButtonElement
    icon: React.ReactElement;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
