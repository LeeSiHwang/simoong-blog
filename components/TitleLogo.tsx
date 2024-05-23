import { useTheme } from 'nextra-theme-docs';
import { classNames } from 'utils/useClassNames';

export default function TitleLogo() {
  const { theme } = useTheme();

  return (
    <p
      className={classNames(
        `p-2 lg:mr-4 inline-flex items-center cursor-pointer text-xl font-bold uppercase tracking-wide dark:text-white text-black`
      )}
    >{`SiMoong's Blog`}</p>
  );
}
