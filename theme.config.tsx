import type { DocsThemeConfig } from 'nextra-theme-docs'
import { LocaleSwitch, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'
import type { ComponentProps, ReactElement } from 'react'
import Logo from './components/TitleLogo';

const config: DocsThemeConfig = {
  logo: (<Logo/>),
  sidebar: {
    defaultMenuCollapseLevel: 1, // here
  },
  editLink: {
    component: null,
  },
  search: {
    component: (<></>),
  },
  project: {
    link: 'https://github.com/LeeSiHwang/simoong-blog',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://simoong.blog' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <title>{`Simoong's Blog`}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title} />
        <meta
          property="og:description"
          content={frontMatter.description}
        />
      </>
    )
  },
}

export default config
