import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const NumberBox = ({ title, number }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {number}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ color: colors.grey[100] }}
      >
        {title}
      </Typography>
      </Box>
    </Box>
  );
};

export default NumberBox;
