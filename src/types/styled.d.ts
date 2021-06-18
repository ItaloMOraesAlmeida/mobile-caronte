import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            Primary: string;
            Secondary: string;
            White: string;
            Black: string;
        };
        fonts: {
            Primary: string;
            Secondary: string;
        };
        dimensions: {
            screen: {
                width: number;
                height: number;
            };
            window: {
                width: number;
                height: number;
            };
        };
    }
}
