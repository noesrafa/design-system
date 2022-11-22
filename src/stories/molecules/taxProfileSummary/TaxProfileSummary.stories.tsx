import TaxProfileSummary from "./TaxProfileSummary";
import {Meta, Story} from "@storybook/react";

export default {
    title: "Molecules/Tax Profile", 
    component: TaxProfileSummary, 
    parameters: {
      layout: 'fullscreen',
    },
  } as Meta;
  
  const Template: Story<TemplateProps> = (args) => <TaxProfileSummary {...args} />;

  interface TemplateProps {
    name: string;
    rfc: string;
    address: string;
    taxStatus: "Positivo" | "Negativo" | "Activo";
    opinion: "Positivo" | "Negativo";
  }
  
  export const Vinculado = Template.bind({});
  Vinculado.args = {
    taxStatus: "Activo",
    name: "Rafael Alexander Tena Chaparro",
    rfc: "TECR000919DN5",
    address: "Ciudad de México 54003, Rio Volga",
    opinion: "Positivo"
  }

