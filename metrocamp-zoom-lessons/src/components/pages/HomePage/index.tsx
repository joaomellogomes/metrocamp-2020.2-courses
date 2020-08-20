import React, { useState } from "react";
// import useHomeVC from "./HomePageVC";

import { Container, Paper, Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MaterialTable from "material-table";

import Header from "../../organisms/Header";
import AppTabs from "../../organisms/AppTabs";

import courses from "../../../assets/courses.json";

import { Container as HomePageContainer } from "./styles";

interface ICourse {
  name: string;
  lessons: {
    period: string;
    weekday: string;
    name: string;
    teacher: string;
    zoomRoomURL: string;
  }[];
}

export default function HomePage() {
  // const {} = useHomeVC();
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);

  return (
    <HomePageContainer>
      <Header />
      <Container maxWidth="lg">
        <AppTabs />
        <Grid item xs={12}>
          <Paper style={{ padding: "10px 15px" }}>
            <Autocomplete
              id="courses-autocomplete"
              options={courses}
              onChange={(_, value) => {
                setSelectedCourse(value);
              }}
              getOptionLabel={(course) => course.name}
              renderInput={(params) => (
                <TextField {...params} label="Curso" variant="outlined" />
              )}
            />
            {selectedCourse && (
              <MaterialTable
                title={selectedCourse.name}
                columns={[
                  { title: "Período", field: "period" },
                  { title: "Dia", field: "weekday" },
                  { title: "Nome", field: "name" },
                  { title: "Professor(a)", field: "teacher" },
                  {
                    title: "Link Sala Zoom",
                    field: "zoomRoomURL",
                    render: ({ zoomRoomURL }) => (
                      <a target="_blank" href={zoomRoomURL} rel="noopener noreferrer">
                        {zoomRoomURL}
                      </a>
                    ),
                  },
                ]}
                data={selectedCourse.lessons}
                localization={{
                  toolbar: {
                    searchPlaceholder: "Pesquisar aula",
                    searchTooltip: "Pesquisar",
                  },
                  body: {
                    emptyDataSourceMessage: selectedCourse.lessons.length
                      ? "Nenhuma aula correspondente"
                      : "Nenhuma aula adicionada ainda",
                  },
                }}
                options={{
                  paging: false,
                }}
                style={{ marginTop: 20 }}
              />
            )}
          </Paper>
        </Grid>
      </Container>
    </HomePageContainer>
  );
}
