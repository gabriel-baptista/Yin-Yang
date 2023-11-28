import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";

const initialValues = {
  login: "",
  password: "",

  nome: "",
  email: "",
  crn: "",
  estado: "",
  cidade: "",
  bairro: "",
  rua: "",
  cep: "",

};

// validação para cada campo do formulario
const userSchema = yup.object().shape({
  login: yup.string().required("Campo necessário"),
  password: yup.string().required("Campo necessário"),
  nome: yup.string().required("Campo necessário"),
  email: yup.string().required("Campo necessário"),
  crn: yup.string().required("Campo necessário"),
  estado: yup.string().required("Campo necessário"),
  cidade: yup.string().required("Campo necessário"),
  bairro: yup.string().required("Campo necessário"),
  rua: yup.string().required("Campo necessário"),
  cep: yup.string().required("Campo necessário"),
});

const SignUp = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    // aqui vai enviar os dados
    console.log(values);
    console.log("dados enviados");
  };

  return (
    <Box m="20px">
      <Header title="Cadastrar Usuário" />

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
                label="Login"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.login}
                name="login"
                error={!!touched.login && !!errors.login}
                helperText={touched.login && errors.login}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Senha"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
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
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="E-mail"
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
                label="CRN"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.crn}
                name="crn"
                error={!!touched.crn && !!errors.crn}
                helperText={touched.crn && errors.crn}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Estado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.estado}
                name="estado"
                error={!!touched.estado && !!errors.estado}
                helperText={touched.estado && errors.estado}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cidade"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cidade}
                name="cidade"
                error={!!touched.cidade && !!errors.cidade}
                helperText={touched.cidade && errors.cidade}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bairro"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bairro}
                name="bairro"
                error={!!touched.bairro && !!errors.bairro}
                helperText={touched.bairro && errors.bairro}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Rua"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rua}
                name="rua"
                error={!!touched.rua && !!errors.rua}
                helperText={touched.rua && errors.rua}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="CEP"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cep}
                name="cep"
                error={!!touched.cep && !!errors.cep}
                helperText={touched.cep && errors.cep}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Cadastrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUp;
