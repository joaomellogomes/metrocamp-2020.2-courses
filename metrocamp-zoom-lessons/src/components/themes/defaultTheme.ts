import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme({
  typography: {
    h1: { fontSize: '2em' },
    h2: { fontSize: '1.5em' },
    h3: { fontSize: '1.17em' },
    h4: { fontSize: '1.12em' },
    h5: { fontSize: '.83em' },
    h6: { fontSize: '.75em' }
  }
});

export default defaultTheme;
