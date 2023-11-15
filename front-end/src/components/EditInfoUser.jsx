import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";

const initialValues = {
  nome: "",
  sobrenome: "",
  pontuacao: "",
  contato: "",
  endereco1: "",
  endereco2: "",

    date: "",
    pesoMuscular: "",
    pesoCorporal: "",
    massaMagra: "",
    gorduraKg: "",
    gorduraPercentual: "",
    agua: "",
    basal: "",
    imc: "",

};

// mascara para numero de celular
const phoneRegex = /(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/;

// validação para cada campo do formulario
const userSchema = yup.object().shape({
  pontuacao: yup.string().required("Campo necessário"),
  date: yup.string().required("Campo necessário"),
  pesoMuscular: yup.string().required("Campo necessário"),
  massaMagra: yup.string().required("Campo necessário"),
  gordura: yup.string().required("Campo necessário"),
  gorduraPercentual: yup.string().required("Campo necessário"),
  agua: yup.string().required("Campo necessário"),
  basal: yup.string().required("Campo necessário"),
  imc: yup.string().required("Campo necessário"),
});

const EditInfoUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    // aqui vai enviar os dados
    console.log(values);
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
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
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
                // label="Data"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dataInicio}
                name="dataConsulta"
                error={!!touched.dataInicio && !!errors.dataInicio}
                helperText={touched.dataInicio && errors.dataInicio}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso Corporal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pesoCorporal}
                name="pesoCorporal"
                error={!!touched.gorduraPercentual && !!errors.gorduraPercentual}
                helperText={touched.gorduraPercentual && errors.gorduraPercentual}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso muscular"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pesoMuscular}
                name="pesoMuscular"
                error={!!touched.pesoMuscular && !!errors.pesoMuscular}
                helperText={touched.pesoMuscular && errors.pesoMuscular}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Massa Magra"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.massaMagra}
                name="massaMagra"
                error={!!touched.massaMagra && !!errors.massaMagra}
                helperText={touched.massaMagra && errors.massaMagra}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso de Gordura (Kg)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gorduraKg}
                name="gorduraKg"
                error={!!touched.gorduraKg && !!errors.gorduraKg}
                helperText={touched.gorduraKg && errors.gorduraKg}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Percentual de Gordura (%)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gorduraPercentual}
                name="gorduraPercentual"
                error={!!touched.gorduraPercentual && !!errors.gorduraPercentual}
                helperText={touched.gorduraPercentual && errors.gorduraPercentual}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Água"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.agua}
                name="agua"
                error={!!touched.agua && !!errors.agua}
                helperText={touched.agua && errors.agua}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Metabolismo Basal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.basal}
                name="basal"
                error={!!touched.basal && !!errors.basal}
                helperText={touched.basal && errors.basal}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="IMC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.imc}
                name="imc"
                error={!!touched.imc && !!errors.imc}
                helperText={touched.imc && errors.imc}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pontuação"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="pontuacao"
                error={!!touched.pontuacao && !!errors.pontuacao}
                helperText={touched.pontuacao && errors.pontuacao}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                FINALIZAR
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditInfoUser;
