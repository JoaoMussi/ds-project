import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'design-system',
  globalStyle: 'src/styles/scss-var.scss',
  outputTargets: [
    {
      type: 'www'
    },
  ],
};
