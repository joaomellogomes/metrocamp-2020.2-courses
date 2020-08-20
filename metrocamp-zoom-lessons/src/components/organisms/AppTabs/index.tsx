import React from "react";

import { Button } from "@material-ui/core";

import { Container, useStyles } from "./styles";

export default function AppTabs() {
  const classes = useStyles();

  return (
    <Container>
      <Button
        className={classes.buttonLink}
        variant="contained"
        color="primary"
        href="/seila"
      >
        seila
      </Button>

      <Button
        className={classes.buttonLink}
        variant="contained"
        color="primary"
        href="/outroseila"
      >
        outroseila
      </Button>
    </Container>
  );
}
