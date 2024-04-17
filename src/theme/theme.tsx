import { PaletteMode } from "@mui/material";
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// color design tokens export
export const tokens = (mode: PaletteMode) => ({
  ...(mode === "dark"
    ? {
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#1F2937",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#0D0D0D",
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#030712",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      indigo: {
        100: "#d4e0ff",
        200: "#a9c0ff",
        300: "#7fa1ff",
        400: "#5481ff",
        500: "#2962ff",
        600: "#214ecc",
        700: "#193b99",
        800: "#102766",
        900: "#081433"
      },
      white: {
        100: "#fafcff",
        200: "#f5f9ff",
        300: "#f0f6ff",
        400: "#ebf3ff",
        500: "#e6f0ff",
        600: "#b8c0cc",
        700: "#8a9099",
        800: "#5c6066",
        900: "#2e3033"
      },
      darkblue: {
        500: "#000000",
      },
      violet: {
        500: "#2962ff"
      },
      purple: {
        500: "#7b1fa2"
      }
    }
    : {
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#dadada",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#E9EEF5",
      },
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      indigo: {
        100: "#081433",
        200: "#102766",
        300: "#193b99",
        400: "#214ecc",
        500: "#2962ff",
        600: "#5481ff",
        700: "#7fa1ff",
        800: "#a9c0ff",
        900: "#d4e0ff",
      },
      white: {
        100: "#2e3033",
        200: "#5c6066",
        300: "#f0f6ff",
        400: "#ebf3ff",
        500: "#e6f0ff",
        600: "#b8c0cc",
        700: "#8a9099",
        800: "#5c6066",
        900: "#2e3033"
      },
      darkblue: {
        500: "#ffffff"
      },
      violet: {
        500: "#2962ff"
      },
      purple: {
        500: "#7b1fa2"
      }
    }),
});

// mui theme settings

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.indigo[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.darkblue[500],
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.indigo[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.darkblue[500],
          },

        }),
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: colors.indigo[900],
              width: '5px',
              borderRadius: 8,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              minHeight: 24,
              backgroundColor: colors.indigo[500],
              width: '5px'
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: colors.indigo[700],
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
              backgroundColor: colors.indigo[700],
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: colors.indigo[700],
            },
          },
        },
      },
    },
  };
};