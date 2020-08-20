import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.header`
  background: rgb(17, 75, 95);
  background: linear-gradient(
    150deg,
    rgba(17, 75, 95, 1) 0%,
    rgba(2, 128, 144, 1) 35%
  );
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const useStyles = makeStyles({
  typography: {
    marginTop: -40,
    color: "#fff",
    fontWeight: 400,
    fontSize: "2.3em",
    textShadow: "2px 4px 5px #3e3e3e",
  },
});
