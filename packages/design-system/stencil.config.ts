import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'design-system',
  globalStyle: 'src/styles/scss-var.scss',
  outputTargets: [
    angularOutputTarget({
        componentCorePackage: '@mono/ds',
        directivesProxyFile: '../angular/projects/component-library/src/lib/stencil-generated/dsComponents.ts',
        directivesArrayFile: '../angular/projects/component-library/src/lib/stencil-generated/index.ts'
    })
  ],
};
