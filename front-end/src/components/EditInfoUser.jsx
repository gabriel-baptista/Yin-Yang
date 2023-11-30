import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import bioimpedanceHook from "../api/hooks/bioimpedance";

const initialValues = {
  pontuacao:"50",
  date:"2002-10-25",
  pesoMuscular:"50",
  massaMagra:"50",
  pesoCorporal: "50",
  gorduraKg: "50",
  
  gorduraPercentual:"50",
  agua:"50",
  basal:"50",
  imc:"50",
};

// validação para cada campo do formulario
const userSchema = yup.object().shape({
  pontuacao: yup.string().required("Campo necessário"),
  date: yup.string().required("Campo necessário"),
  pesoMuscular: yup.string().required("Campo necessário"),
  massaMagra: yup.string().required("Campo necessário"),
  gorduraKg: yup.string().required("Campo necessário"),
  gorduraPercentual: yup.string().required("Campo necessário"),
  agua: yup.string().required("Campo necessário"),
  basal: yup.string().required("Campo necessário"),
  imc: yup.string().required("Campo necessário"),
});

const EditInfoUser = ({ id }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = useState(initialValues);

  const handleFormSubmit = () => {
    bioimpedanceHook.set(
      {
        id_patient: id,
        agua_consulta: formData.agua,
        peso_gordura: formData.gorduraKg,
        peso_consulta: formData.pesoCorporal,
        peso_muscular: formData.pesoMuscular,
        massa_magra: formData.massaMagra,
        percentual_gordura: formData.gorduraPercentual,
        imc: formData.imc,
        basal: formData.basal, 
        pontuacao: formData.pontuacao,
        data_consulta: formData.date,
      }
    )
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
    console.log(formData);
    console.log("dados enviados");
  };

  return (
    <Box m="20px">
      <Header title="Adicionar Informações" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
      
          <Form>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >

              {/* teste */}
              <TextField
                fullWidth
                variant="filled"
                type="Date"
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value })
              }}
              value={formData.date}
                name="dataConsulta"
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso Corporal"
                onChange={(e)=>setFormData({...formData, pesoCorporal: e.target.value})}
                value={formData.pesoCorporal}
                name="pesoCorporal"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso muscular"
                onChange={(e)=>setFormData({...formData, pesoMuscular: e.target.value})}
                value={formData.pesoMuscular}
                name="pesoMuscular"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Massa Magra"
                onChange={(e)=>setFormData({...formData, massaMagra: e.target.value})}
                value={formData.massaMagra}
                name="massaMagra"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso de Gordura (Kg)"
                onChange={(e)=>setFormData({...formData, gorduraKg: e.target.value})}
                value={formData.gorduraKg}
                name="gorduraKg"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Percentual de Gordura (%)"
                onChange={(e)=>setFormData({...formData, gorduraPercentual: e.target.value})}
                value={formData.gorduraPercentual}
                name="gorduraPercentual"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Água"
                onChange={(e)=>setFormData({...formData, agua: e.target.value})}
                value={formData.agua}
                name="agua"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Metabolismo Basal"
                onChange={(e)=>setFormData({...formData, basal: e.target.value})}
                value={formData.basal}
                name="basal"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="IMC"
                onChange={(e)=>setFormData({...formData, imc: e.target.value})}
                value={formData.imc}
                name="imc"
                
                
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pontuação"
                onChange={(e)=>setFormData({...formData, pontuacao: e.target.value})}
                value={formData.pontuacao}
                name="pontuacao"
                
                
                sx={{ gridColumn: "span 2" }}
              />

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                FINALIZAR
              </Button>
            </Box>
          </Form>
      </Formik>
    </Box>
  );
};

export default EditInfoUser;
