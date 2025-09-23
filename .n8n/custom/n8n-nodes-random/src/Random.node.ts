import {
  INodeType,
  INodeTypeDescription,
  IExecuteFunctions,
  NodeConnectionType,
} from "n8n-workflow";

export class Random implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Random",
    name: "random",
    group: ["transform"],
    version: 1,
    description: "True Random Number Generator via random.org",
    icon: "file:../icons/onfly.svg",
    defaults: {
      name: "Random",
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    properties: [
      {
        displayName: "Min",
        name: "min",
        type: "number",
        default: 1,
        description: "Minimum value (inclusive)",
      },
      {
        displayName: "Max",
        name: "max",
        type: "number",
        default: 100,
        description: "Maximum value (inclusive)",
      },
    ],
  };

  async execute(this: IExecuteFunctions) {
    const min = this.getNodeParameter("min", 0) as number;
    const max = this.getNodeParameter("max", 0) as number;

    const response = await this.helpers.httpRequest({
      method: "GET",
      url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
    });

    return [this.helpers.returnJsonArray([{ random: Number(response) }])];
  }
}
