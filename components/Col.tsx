import { CustomComp } from "utils/types";
import { classNames } from "utils/useClassNames";

export default function Col({ children, className = "", onClick }: CustomComp) {
  return (
    <div 
      onClick={onClick}
      className={classNames("flex flex-col", className)}>
      {children}
    </div>
  );
}