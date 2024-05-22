import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/TitleLogo';

const config: DocsThemeConfig = {
  logo: (<Logo/>),
  sidebar: {
    defaultMenuCollapseLevel: 1, // here
  },
  editLink: {
    component: null,
  },
}

export default config
