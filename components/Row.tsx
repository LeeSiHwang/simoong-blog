import { CustomComp } from "utils/types";
import { classNames } from "utils/useClassNames";

export default function Row({ children, className ="" }: CustomComp) {
  return <div className={classNames('flex flex-row', className && className)}>{children}</div>;
}