import { LightningElement, api } from "lwc";

export default class Template extends LightningElement {
  @api label = "";
  @api colorScheme = "";
  

  showFeatures = true;

  get features() {
    return [
      {
        label: "I am ready.",
        icon: "utility:edit",
      },
      {
        label: "To write.",
        icon: "utility:refresh",
      },
      {
        label: "some code.",
        icon: "utility:brush",
      },
    ];
  }
}
