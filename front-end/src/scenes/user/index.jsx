import * as React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import WaterChart from "../../components/WaterChart";
import EditInfoUser from "../../components/EditInfoUser";
import NumberBox from "../../components/NumberBox";
import PesoChart from "../../components/PesoChart";
import Pesomuscularchart from "../../components/PesoMuscularChart";
import GorduraKgChart from "../../components/GorduraKgChart";
import GorduraChart from "../../components/GorduraChart";
import DeleteIcon from '@mui/icons-material/Delete';

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box m="30px" overflow="clip">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Jon Snow" />

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
              mr: "15px"
            }}
          >
            <EditIcon sx={{ mr: "10px" }} />
            Editar
          </Button>
          <Button
            // onClick={handleOpen}
            sx={{
              backgroundColor: colors.redAccent[600],
              color: colors.grey[100],
              "&:hover": {
                backgroundColor: colors.redAccent[700],
              },
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DeleteIcon sx={{ mr: "10px" }} />
            Excluir
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
        {/* linha 0 */}

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="Peso (kg)" number="89,3" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="IMC" number="10" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="Metabolismo Basal" number="10" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="Pontuação" number="73" />
        </Box>
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
                Peso Muscular
              </Typography>
            </Box>
          </Box>
          <Pesomuscularchart isDashboard={true} />
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
                Peso da Água Corporal
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
                Peso Corporal
              </Typography>
            </Box>
          </Box>
          <PesoChart isDashboard={true} />
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
                Peso da Gordura Corporal
              </Typography>
            </Box>
          </Box>
          <GorduraKgChart isDashboard={true} />
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
                Percentual de Gordura Corporal
              </Typography>
            </Box>
          </Box>
          <GorduraChart isDashboard={true} />
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
