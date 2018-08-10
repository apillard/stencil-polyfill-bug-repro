import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    console.log('This line should always log');
    const bool = Number.isFinite(45);
    const otherBool = Number.isNaN(45);
    console.log('Value of bool is', bool);
    console.log('Value of otherBool is', otherBool);
    console.log('IE never logs these lines because it fails silently');
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
