import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import userImg from "../../assets/user.png";

const Sidemenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    // <Box
    //   sx={{
    //     // "& .pro-sidebar-inner": {
    //     //   background: `${colors.primary[400]} !important`,
    //     // },
    //     // "& .pro-sidebar-wrapper": {
    //     //   backgroundColor: "transparent !important",
    //     // },
    //     // "& .pro-inner-item": {
    //     //   padding: "5px 35px 5px 20px important",
    //     // },
    //     // "& .pro-inner-item:hover": {
    //     //   color: "#868dfb !important",
    //     // },
    //     // "& .pro-menu-item.active": {
    //     //   color: "6870fa !important",
    //     // },

    //   }}
    // >
    <Sidebar>
      <Menu>
        {/* user */}
        {!isCollapsed && (
          <Box mb={"25px"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                alt="profile-user"
                width={"100px"}
                height={"100px"}
                src={userImg}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>

            <Box textAlign={"center"}>
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight={"bold"}
                sx={{ m: "10px 0 0 0" }}
              >
                Gabs
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                nutricionista
              </Typography>
            </Box>
          </Box>
        )}
      </Menu>
    </Sidebar>
    // </Box>
  );
};

export default Sidemenu;

{
  /* <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar> */
}
