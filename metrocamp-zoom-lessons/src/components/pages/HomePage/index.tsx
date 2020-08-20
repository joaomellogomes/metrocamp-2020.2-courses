import React from "react";
// import useHomeVC from "./HomePageVC";

import { Container, Paper, Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MaterialTable from 'material-table'

import Header from "../../organisms/Header";
import AppTabs from "../../organisms/AppTabs";

import courses from "../../../assets/courses.json";

import { Container as HomePageContainer } from "./styles";

export default function HomePage() {
  // const {} = useHomeVC();

  return (
    <HomePageContainer>
      <Header />
      <Container maxWidth="lg">
        <AppTabs />
        <Grid item xs={12}>
          <Paper>
            <Autocomplete
              id="courses-autocomplete"
              options={courses}
              getOptionLabel={(course) => course.name}
              // style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Curso" variant="outlined" />
              )}
            />
            <MaterialTable
              title="Ciência da Computação"
              columns={[
                { title: 'Período', field: 'period' },
                { title: 'Dia', field: 'weekday' },
                { title: 'Nome', field: 'name' },
                { title: 'Professor(a)', field: 'teacher' },
                { title: 'Link Sala Zoom', field: 'zoomRoomURL' },
              ]}
              data={courses[0].lessons}
            />
          </Paper>
        </Grid>
      </Container>
    </HomePageContainer>
  );
}
