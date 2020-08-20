import React from "react";

import { Typography } from "@material-ui/core";

import { Container, useStyles } from "./styles";

export default function Header() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.typography} variant="h1">
        Metrocamp - Disciplinas 2020.2
      </Typography>
    </Container>
  );
}
