import { styled } from "@mui/material";

export const FooterStyle = styled("div")(({ theme }) => ({
  width: "100%",
  height: 100,
  backgroundColor: theme.palette.primary.main,
  position: "absolute",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ClearButton = styled("a")(({ theme }) => ({
  fontWeight: "bolder",
  textTransform: "uppercase",
  fontSize: 25,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 4,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  marginTop: 20,
  marginBottom: 32,
  boxShadow: "4px 6px",
  ":hover": {
    cursor: "pointer",
    boxShadow: "2px 4px",
    transition: "all 0.2s ease-in-out",
  },
  ":active": {
    cursor: "pointer",
    boxShadow: "1px 2px",
    transition: "all 0.2s ease-in-out",
  },
}));
