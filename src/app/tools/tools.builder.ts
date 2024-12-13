import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { ToolsComponent } from "./tools.component";


export const toolsBuilderComponent: RegisteredComponent =
{
    component: ToolsComponent,
    name: "Tools",
    inputs: [
        {
            name: 'title',
            type: 'string',
            defaultValue: 'I am the title',
        },
        {
            name: 'description',
            type: 'string',
            defaultValue: ''
        }
    ],
};