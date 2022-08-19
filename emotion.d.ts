import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        primary: {
            main: string,
            dark: string
        }
        secondary: {
            main: string
        },
        gray: {
            100: string,
            500: string
        },
        maxWidth: string,
        iconsOpacity: number
    }
}