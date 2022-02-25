import { styled } from "@mui/material";

export const RootPageStyle = styled("span")(({ theme }) => ({
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  }));

export const ChuckGridviewStyle = styled("div")({
  display: "flex",
  flex: 1,
  justifyContent: "center",
  flexWrap: "wrap",
  borderRadius: 4,
});

export const RandomButton = styled("a")(({ theme }) => ({
  fontWeight: "bolder",
  textTransform: "uppercase",
  fontSize: 25,
  backgroundColor: theme.palette.primary.main,
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

export const ChuckCardStyle = styled("div")(({ theme }) => ({
  width: 200,
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  margin: 12,
  marginRight: 0,
  padding: 6,
  boxShadow: "4px 6px",
  ":hover": {
    cursor: "pointer",
    boxShadow: "2px 4px",
    transition: "all 0.2s ease-in-out",
  },
}));

export const ChuckCardImage = styled("img")({
  width: 60,
  height: 60,
});

export const ChuckCardLabel = styled("label")({
  fontSize: 20,
  flexGrow: 1,
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
  },
});
