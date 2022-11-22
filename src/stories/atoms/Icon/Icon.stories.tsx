import { Icon } from "./Icon";
import {Meta, Story} from "@storybook/react";

export default {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<TemplateProps> = (args) => <Icon {...args} />;

interface TemplateProps {
    size:"xxsmall" | "xsmall" | "small" | "medium" | "large";
    icon: any;
  }

export const Small = Template.bind({});
Small.args = {
  size: "small",
  icon: "satLogo",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  icon: "satLogo",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  icon: "satLogo",
};
