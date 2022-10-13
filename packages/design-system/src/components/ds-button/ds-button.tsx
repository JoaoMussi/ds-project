import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true
})
export class DsButton {
  /**
   * The first name
   */
  @Prop() label: string;

  render() {
    return (
      <Host>
        <button class='ds-button'>{this.label}</button>
      </Host>
    );
  }
}
