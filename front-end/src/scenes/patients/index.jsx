
import { useState, useEffect } from "react";
// renomear arquivo depois
import { Box, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar, ptBR } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataGet } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
// import User from "../user";
import { useNavigate } from "react-router-dom";

const Patients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tableData, setTableData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    mockDataGet().then((data) => {
      setTableData(data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nome",
      headerName: "Nome",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "idade",
      headerName: "Idade",
      type: "number",
      headerAlign: "left",
      Align: "left",
    },
    { field: "contato", headerName: "Celular", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    // campo abaixo vai estilizar a celula com um botao
    {
      field: "access",
      headerName: "",
      flex: 1,
      renderCell: (fieldData) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
          // backgroundColor={
          //   access === "admin"
          //     ? colors.greenAccent[600]
          //     : colors.greenAccent[600]
          // }
          // borderRadius="4px"
          >
            {/* {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />} */}
            {/* {access === "admin" && <EditOutlinedIcon />}
            {access === "manager" && <EditOutlinedIcon />}
            {access === "user" && <EditOutlinedIcon />} */}
            {/* <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {"Editar"}
            </Typography> */}
            <Button
              onClick={() => navigate(`/pacientes/` + fieldData.row.id, { state: { name: fieldData.row.nome } }) }
              sx={{
                backgroundColor: colors.greenAccent[600],
                color: colors.grey[100],
                "&:hover": {
                  backgroundColor: colors.greenAccent[700],
                },
                fontSize: "12px",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              <EditIcon sx={{ mr: "10px" }} />
              Editar
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="10px">
      <Header title="Pacientes" subtitle="" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          // estilizando a datagrid
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: colors.greenAccent[600],
            backgroundColor: colors.primary[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backgroundColor: colors.greenAccent[700],
            // backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rowHeight={40}
          rows={tableData}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[3, 20, 50]}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </Box>
  );
};

export default Patients;