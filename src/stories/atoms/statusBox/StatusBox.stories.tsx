import StatusBox from "./StatusBox";

export default {
    title: "Atoms/Status Box", 
    component: StatusBox, 
    argTypes: {
      status: "Activo",
    },
    parameters: {
      layout: 'centered',
    },
  } 
  
  const Template = (args:any) => <StatusBox {...args} />;
  
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