import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import WaterChart from "../../components/WaterChart";
import { mockTransactions } from "../../data/mockData"; // retirar e colocar dados reais
import LineChart from "../../components/LineChart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Form from "../form";
import EditInfoUser from "../../components/EditInfoUser";

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box m="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Nome usuario" />

        {/* botao editar */}
        <Box>
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: colors.greenAccent[600],
              color: colors.grey[100],
              "&:hover": {
                backgroundColor: colors.greenAccent[700],
              },
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <EditIcon sx={{ mr: "10px" }} />
            Editar
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 700,
                height: 500,
                bgcolor: colors.primary[400],
                // border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              <EditInfoUser />
            </Box>
          </Modal>
        </Box>
      </Box>

      {/* grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="20px"
      >
        {/* Linha 1 */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Água
              </Typography>
            </Box>
          </Box>
          <WaterChart isDashboard={true} />
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Água
              </Typography>
            </Box>
          </Box>
          <WaterChart isDashboard={true} />
        </Box>

        {/* linha 2 */}
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Água
              </Typography>
            </Box>
          </Box>
          <WaterChart isDashboard={true} />
        </Box>

        {/* linha 3 */}

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Água
              </Typography>
            </Box>
          </Box>
          <WaterChart isDashboard={true} />
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Água
              </Typography>
            </Box>
          </Box>
          <WaterChart isDashboard={true} />
        </Box>

        {/* inicio grafico grande */}
        {/* <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Gráfico de clientes no ano
              </Typography>
            </Box>
          </Box>

          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box> */}
        {/* fim grafico grande */}
      </Box>
      {/* fim grid */}
    </Box>
  );
};

export default User;
