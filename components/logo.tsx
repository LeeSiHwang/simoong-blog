import { useTheme } from 'nextra-theme-docs';
import { classNames } from 'utils/useClassNames';

export default function Logo() {
  const { theme } = useTheme();

  return (
    <h1
      className={classNames(
        `p-2 lg:mr-4 inline-flex items-center cursor-pointer text-xl font-bold uppercase tracking-wide `,
        theme === 'dark' ? 'text-white' : 'text-black'
      )}
    >{`SiMoong's Blog`}</h1>
  );
}
