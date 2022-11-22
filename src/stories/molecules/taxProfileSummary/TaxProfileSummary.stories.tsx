import TaxProfileSummary from "./TaxProfileSummary";

export default {
    title: "Molecules/Tax Profile", 
    component: TaxProfileSummary, 
    parameters: {
      layout: 'fullscreen',
    },
  } 
  
  const Template = (args:any) => <TaxProfileSummary {...args} />;
  
  export const Vinculado = Template.bind({});
  Vinculado.args = {
    taxStatus: "Activo",
    name: "Rafael Alexander Tena Chaparro",
    rfc: "TECR000919DN5",
    address: "Ciudad de México 54003, Rio Volga",
    opinion: "Positivo"
  }

