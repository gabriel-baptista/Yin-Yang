import * as React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import { Box, Button, Modal, useTheme } from "@mui/material";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import { recipe } from "../../data/recipe";
import { tokens } from "../../theme";
import EditRecipe from "../../components/EditRecipe";

const Recipe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [recipeInfo, setReceipInfo] = React.useState([]);

  React.useEffect(() => {
    recipe().then((data) => {
      setReceipInfo(data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Receitas" />
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
              mr: "15px",
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
              <EditRecipe />
            </Box>
          </Modal>
        </Box>
      </Box>

      {recipeInfo.map(({ id, nome, ingredientes, modo_preparo }) =>
      (
        <Accordion key={id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {nome}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
              <Typography>
                {ingredientes.split('\n').map((ingrediente, index) => (
                  <React.Fragment key={index}>
                    {ingrediente}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </AccordionDetails>

          <AccordionDetails>
            <Typography>{modo_preparo}</Typography>
          </AccordionDetails>
        </Accordion>
      )
      )}
    </Box>
  );
};

export default Recipe;
