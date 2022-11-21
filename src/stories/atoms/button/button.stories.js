import Button from "./Button";

export default {
  title: "Button", //categoria/subcategoria
  component: Button, //componente seleccionado
  argTypes: {
    backgroundColor: { control: "color" }, // Se agrega el control de color
  },
};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Botón primario",
};

export const Link = Template.bind({});
Link.args = {
  text: "Soy un link",
  children: "google.com",
};

export const linkedButton = () => <Button href={"google.com"}>Texto</Button>;
