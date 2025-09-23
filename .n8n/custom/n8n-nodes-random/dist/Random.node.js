"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    description = {
        displayName: "Random",
        name: "random",
        group: ["transform"],
        version: 1,
        description: "True Random Number Generator via random.org",
        icon: "file:../icons/onfly.svg",
        defaults: {
            name: "Random",
        },
        inputs: ["main" /* NodeConnectionType.Main */],
        outputs: ["main" /* NodeConnectionType.Main */],
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
    async execute() {
        const min = this.getNodeParameter("min", 0);
        const max = this.getNodeParameter("max", 0);
        const response = await this.helpers.httpRequest({
            method: "GET",
            url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
        });
        return [this.helpers.returnJsonArray([{ random: Number(response) }])];
    }
}
exports.Random = Random;
