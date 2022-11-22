import StatusBox from "./StatusBox";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Atoms/Status Box", 
    component: StatusBox, 
    parameters: {
      layout: 'centered',
    },
  }  as Meta;
  
  const Template: Story<TemplateProps> = (args:any) => <StatusBox {...args} />;

  interface TemplateProps {
    status:"Activo" | "Positivo" | "Negativo"
  }
  
  export const Active = Template.bind({});
  Active.args = {
    status: "Activo"
  }

  export const Positive = Template.bind({});
  Positive.args = {
    status: "Positivo"
  }

  export const Negative = Template.bind({});
  Negative.args = {
    status: "Negativo"
  }