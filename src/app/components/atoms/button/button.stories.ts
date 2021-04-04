import {Story, Meta} from '@storybook/angular/types-6-0';

import {ButtonComponent} from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent
} as Meta;

const Template: Story<ButtonComponent> = (args: any) => ({
  component: ButtonComponent,
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {
  text: 'Default',
  icon: 'icona',
  color: 'red',
};

export const withColor = Template.bind({});
withColor.args = {
  text: 'Default',
  icon: 'icona',
  color: 'red',
};

export const withIcon = Template.bind({});
withIcon.args = {
  text: 'Default',
  icon: 'icona',
  color: 'red',
};
