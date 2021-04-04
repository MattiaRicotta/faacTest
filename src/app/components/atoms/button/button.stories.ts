import {Story, Meta} from '@storybook/angular/types-6-0';

import {ButtonComponent} from './button.component';
import {Input} from '@angular/core';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    labelColor: {
      control: {type: 'text'}
    },
    labelHexColor: {
      control: {type: 'color'}
    },
    bgColor: {
      control: {type: 'text'}
    },
    bgHexColor: {
      control: {type: 'color'}
    },
    icon: {
      control: {type: 'text'}
    },
    label: {
      control: {type: 'text'}
    },
    customClass: {
      control: {type: 'text'},
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: any) => ({
  component: ButtonComponent,
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const withIcon = Template.bind({});
withIcon.args = {
  ...Default.args,
  icon: 'icona'
};
