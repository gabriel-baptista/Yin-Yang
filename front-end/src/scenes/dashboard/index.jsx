import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import { mockTransactions } from "../../data/mockData"; // retirar e colocar dados reais
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { LineChart } from '@mui/x-charts/LineChart';
import StatisticBox from "../../components/StatisticBox";
import dashboard from "../../api/hooks/dashboard";

const siglasMeses = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
]

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [indicators, setIndicators] = useState({
    agendamentos_mes: 0,
    pacientes_mes: 0,
    total_agendamentos: 0,
    total_pacientes: 0,
    pacientes_ano: [{
      pacientes: 0,
      month: 1
    }]
  })

  useEffect(() => {
    dashboard.get().then((responce) => {
      setIndicators(responce.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <Box m="30px">
      {/* header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>

      {/* grid e graficos */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* linha 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatisticBox
            title={indicators.agendamentos_mes}
            subtitle="Agendamento por Mes"
            icon={
              <DateRangeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatisticBox
            title={indicators.pacientes_mes}
            subtitle="Pacientes por Mes"
            progress="0.5"
            icon={
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatisticBox
            title={indicators.total_agendamentos}
            subtitle="Total de Agendamentos"
            icon={
              <CalendarMonthIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatisticBox
            title={indicators.total_pacientes}
            subtitle="Total de Pacientes"
            icon={
              <PeopleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* linha 2 */}
        {/* grafico de linha */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
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
                Gráfico de clientes no ano por mes
              </Typography>
            </Box>
          </Box>
          <LineChart
            series={[
              { data: indicators.pacientes_ano.map(item => item.pacientes) },
            ]}
            xAxis={[{ scaleType: 'point', data: indicators.pacientes_ano.map(item => siglasMeses[item.month - 1]) }]}
            yAxis={[{ min: 0 }]}
          />
        </Box>
        {/* fim grafico de linha */}

        {/* transactions */}
        {/* <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                {" "}
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box> */}

      </Box>
    </Box>
  );
};

export default Dashboard;
