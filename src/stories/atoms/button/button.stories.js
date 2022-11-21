import Button from "./Button";

export default {
  title: "Atoms/Button", 
  component: Button, 
  argTypes: {
    variant: "primary", 
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary button",
  onClick: () => console.log("Hola")
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button secondary",
  variant: "secondary"
};

