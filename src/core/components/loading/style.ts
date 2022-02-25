import { styled } from "@mui/material";

export const LoadingStyle = styled("div")(({ theme }) => ({
  width: 200,
  minHeight: 200,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  margin: 12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
