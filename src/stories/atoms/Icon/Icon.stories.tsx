import { Icon } from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    icon: "satLogo",
    size: "medium",
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args: any) => <Icon {...args} />;
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
