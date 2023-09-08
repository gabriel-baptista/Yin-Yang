import { Box } from "@mui/material";
import Headerzinho from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headerzinho title="DASHBOARD" subtitle="Bem vindo à sua dashboard" />
      
      </Box>
    </Box>
  );
};

export default Dashboard;
