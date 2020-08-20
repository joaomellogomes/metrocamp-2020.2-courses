import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  top: -25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const useStyles = makeStyles({
  buttonLink: {
    height: "100%",
    width: "40%",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#e1eafd",
  },
});
