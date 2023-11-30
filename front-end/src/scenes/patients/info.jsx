import * as React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Modal,
} from "@mui/material";
import { useParams, useLocation } from 'react-router-dom';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import EditInfoUser from "../../components/EditInfoUser";
import NumberBox from "../../components/NumberBox";
import DeleteIcon from '@mui/icons-material/Delete';
import bioimpedanceHook from "../../api/hooks/bioimpedance";
import { LineChart } from '@mui/x-charts/LineChart';

// [
//     {
//         "muscleChart": [
//             {
//                 "y": 2,
//                 "x": "1212-12-12"
//             },
//             {
//                 "y": 2,
//                 "x": "1990-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2002-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2003-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2005-10-25"
//             }
//         ],
//         "waterChart": [
//             {
//                 "y": 6,
//                 "x": "1212-12-12"
//             },
//             {
//                 "y": 6,
//                 "x": "1990-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2002-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2003-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2005-10-25"
//             }
//         ],
//         "bodyChart": [
//             {
//                 "y": 1,
//                 "x": "1212-12-12"
//             },
//             {
//                 "y": 1,
//                 "x": "1990-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2002-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2003-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2005-10-25"
//             }
//         ],
//         "fatChart": [
//             {
//                 "y": 5,
//                 "x": "1212-12-12"
//             },
//             {
//                 "y": 4,
//                 "x": "1990-10-25"
//             },
//             {
//                 "y": 2,
//                 "x": "2002-10-25"
//             },
//             {
//                 "y": 20,
//                 "x": "2003-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2005-10-25"
//             }
//         ],
//         "percentFatChart": [
//             {
//                 "y": 5,
//                 "x": "1212-12-12"
//             },
//             {
//                 "y": 5,
//                 "x": "1990-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2002-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2003-10-25"
//             },
//             {
//                 "y": 50,
//                 "x": "2005-10-25"
//             }
//         ]
//     }
// ]

const PacientsInfo = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [pacient, setPatient] = React.useState({ name: "" });
  const [cards, setCards] = React.useState({
    peso: 0, imc: 0, basal: 0, pontuacao: 0
  });

  const [charts, setCharts] = React.useState({
    muscleChart: { labels: [0], series: [0] },
    waterChart: { labels: [0], series: [0] },
    bodyChart: { labels: [0], series: [0] },
    fatChart: { labels: [0], series: [0] },
    percentFatChart: { labels: [0], series: [0] }
  });
  const [bioimpedance, setBioimpedance] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    console.log(charts);
  }, [charts])

  React.useEffect(() => {
    setPatient({ name: state.name })

    bioimpedanceHook.get(id)
      .then((resquest) => {

        const LabelsAndSeries = (data) => {
          var labels = [];
          var series = [];
          data.forEach(element => {
            labels.push(element.x);
            series.push(element.y);
          });
          return { labels: labels, series: series };
        }


        setCards(resquest.data[0].cards[0]);
        setCharts({
          muscleChart: LabelsAndSeries(resquest.data[0].charts[0].muscleChart),
          waterChart: LabelsAndSeries(resquest.data[0].charts[0].waterChart),
          bodyChart: LabelsAndSeries(resquest.data[0].charts[0].bodyChart),
          fatChart: LabelsAndSeries(resquest.data[0].charts[0].fatChart),
          percentFatChart: LabelsAndSeries(resquest.data[0].charts[0].percentFatChart)
        })
      }).catch((error) => {
        console.log(error);
      })

  }, [id, state.name]);

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];


  return (
    <Box m="30px" overflow="clip">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={pacient.name} />

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
              <EditInfoUser id={id} />
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
          <NumberBox title="Peso (kg)" number={cards.peso} />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="IMC" number={cards.imc} />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="Metabolismo Basal" number={cards.basal} />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="130px"
        >
          <NumberBox title="Pontuação" number={cards.pontuacao} />
        </Box>
        {/* Linha 1 */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
          style={{
            paddingBottom: "15px"
          }}
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
          <LineChart
            series={[
              { data: charts.muscleChart.series },
            ]}
            xAxis={[{ scaleType: 'point', data: charts.muscleChart.labels }]}
          />
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
          style={{
            paddingBottom: "15px",
          }}
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
          <LineChart
            series={[{ data: charts.waterChart.series }]}
            xAxis={[{ scaleType: 'point', data: charts.waterChart.labels }]}
          />
          {/* <WaterChart isDashboard={true} id={id}/> */}
        </Box>

        {/* linha 2 */}
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
          style={{
            paddingBottom: "15px"
          }}
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
          <LineChart
            series={[{ data: charts.bodyChart.series, area: true }]}
            xAxis={[{ scaleType: 'point', data: charts.bodyChart.labels }]}
          />
        </Box>

        {/* linha 3 */}

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
          style={{
            paddingBottom: "15px"
          }}
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
          <LineChart
            series={[{ data: charts.fatChart.series }]}
            xAxis={[{ scaleType: 'point', data: charts.fatChart.labels }]}
          />
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          alignItems="center"
          justifyContent="center"
          style={{
            paddingBottom: "15px"
          }}
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
          <LineChart
            series={[{ data: charts.percentFatChart.series }]}
            xAxis={[{ scaleType: 'point', data: charts.percentFatChart.labels }]}
          />
        </Box>
      </Box>
      {/* fim grid */}
    </Box>
  );
};

export default PacientsInfo;
