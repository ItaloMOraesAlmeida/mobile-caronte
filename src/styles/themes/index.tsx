import React from "react";
import { ThemeProvider } from "styled-components/native";

import defaultTheme from "./default";

interface IPropsTheme {
    children: React.ReactNode;
}

const Theme = ({ children }: IPropsTheme) => (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Theme;
