import { NgModule } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';
import { DIRECTIVES } from './stencil-generated';
import { TestViewComponent } from './test-view/test-view.component';



@NgModule({
  declarations: [
    ComponentLibraryComponent,
    ...DIRECTIVES,
    TestViewComponent
  ],
  imports: [
  ],
  exports: [
    ComponentLibraryComponent,
    TestViewComponent,
    ...DIRECTIVES
  ]
})
export class ComponentLibraryModule { }
