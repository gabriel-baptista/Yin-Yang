import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";

const initialValues = {
  nome: "",
  sobrenome: "",
  email: "",
  contato: "",
  endereco1: "",
  endereco2: "",

    date: "",
    pesoMuscular: "",
    massaMagra: "",
    gordura: "",
    gorduraViceral: "",
    agua: "",
    basal: "",
    ossos: "",

};

// mascara para numero de celular
const phoneRegex = /(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/;

// validação para cada campo do formulario
const userSchema = yup.object().shape({
  nome: yup.string().required("Campo necessário"),
  sobrenome: yup.string().required("Campo necessário"),
  email: yup.string().email("E-mail inválido").required("Campo necessário"),
  contato: yup
    .string()
    .matches(phoneRegex, "Número de celular inválido")
    .required("Campo necessário"),
  endereco1: yup.string().required("Campo necessário"),


  date: yup.string().required("Campo necessário"),
  pesoMuscular: yup.string().required("Campo necessário"),
  massaMagra: yup.string().required("Campo necessário"),
  gordura: yup.string().required("Campo necessário"),
  gorduraViceral: yup.string().required("Campo necessário"),
  agua: yup.string().required("Campo necessário"),
  basal: yup.string().required("Campo necessário"),
  ossos: yup.string().required("Campo necessário"),
  
  
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
                type="text"
                label="Data"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 4" }}
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
                sx={{ gridColumn: "span 4" }}
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
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gordura"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gordura}
                name="gordura"
                error={!!touched.gordura && !!errors.gordura}
                helperText={touched.gordura && errors.gordura}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gordura Viceral"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gorduraViceral}
                name="gorduraViceral"
                error={!!touched.gorduraViceral && !!errors.gorduraViceral}
                helperText={touched.gorduraViceral && errors.gorduraViceral}
                sx={{ gridColumn: "span 4" }}
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
                sx={{ gridColumn: "span 4" }}
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
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ossos"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ossos}
                name="ossos"
                error={!!touched.ossos && !!errors.ossos}
                helperText={touched.ossos && errors.ossos}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ossos"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="ossos"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ossos"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="ossos"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ossos"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="ossos"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              {/* fim teste */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nome}
                name="nome"
                error={!!touched.nome && !!errors.nome}
                helperText={touched.nome && errors.nome}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sobrenome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sobrenome}
                name="sobrenome"
                error={!!touched.sobrenome && !!errors.sobrenome}
                helperText={touched.sobrenome && errors.sobrenome}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contato"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contato}
                name="contato"
                error={!!touched.contato && !!errors.contato}
                helperText={touched.contato && errors.contato}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Endereço 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endereco1}
                name="endereco1"
                error={!!touched.endereco1 && !!errors.endereco1}
                helperText={touched.endereco1 && errors.endereco1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Endereço 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endereco2}
                name="endereco2"
                error={!!touched.endereco2 && !!errors.endereco2}
                helperText={touched.endereco2 && errors.endereco2}
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
