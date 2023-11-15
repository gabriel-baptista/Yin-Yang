import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  nome: "",
  sobrenome: "",
  email: "",
  contato: "",
  cidade: "",
  idade: "",
  sexo: "",
  pesoInicial: "",
  dataInicio: "",
  medicamento: "",
  exercicio: "",
  observacao: "",
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
  cidade: yup.string().required("Campo necessário"),
  idade: yup.string().required("Campo necessário"),
  sexo: yup.string().required("Campo necessário"),
  pesoInicial: yup.string().required("Campo necessário"),
  dataInicio: yup.string().required("Campo necessário"),
  medicamento: yup.string().required("Campo necessário"),
  exercicio: yup.string().required("Campo necessário"),
  observacao: yup.string(),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    // aqui vai enviar os dados
    console.log(values);
    console.log("dados enviados");
  };

  return (
    <Box m="20px">
      <Header title="Criar usuário" />

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
                sx={{ gridColumn: "span 2" }}
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
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cidade"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endereco1}
                name="cidade"
                error={!!touched.endereco1 && !!errors.endereco1}
                helperText={touched.endereco1 && errors.endereco1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Endereço"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endereco2}
                name="endereco"
                error={!!touched.endereco2 && !!errors.endereco2}
                helperText={touched.endereco2 && errors.endereco2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Idade"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.idade}
                name="idade"
                error={!!touched.idade && !!errors.idade}
                helperText={touched.idade && errors.idade}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                // select
                label="Sexo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sexo}
                name="sexo"
                error={!!touched.sexo && !!errors.sexo}
                helperText={touched.sexo && errors.sexo}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Peso Inicial"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pesoInicial}
                name="pesoInicial"
                error={!!touched.pesoInicial && !!errors.pesoInicial}
                helperText={touched.pesoInicial && errors.pesoInicial}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="Date"
                label="Data"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dataInicio}
                name="dataInicio"
                error={!!touched.dataInicio && !!errors.dataInicio}
                helperText={touched.dataInicio && errors.dataInicio}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Usa medicamentos?"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.medicamento}
                name="medicamento"
                error={!!touched.medicamento && !!errors.medicamento}
                helperText={touched.medicamento && errors.medicamento}
                sx={{ gridColumn: "span 2" }}
                multiline minRows={3}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Faz Exercicios?"
                multiline minRows={3}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.exercicio}
                name="exercicio"
                error={!!touched.exercicio && !!errors.exercicio}
                helperText={touched.exercicio && errors.exercicio}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Observação"
                multiline minRows={5}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.observacao}
                name="observacao"
                error={!!touched.observacao && !!errors.observacao}
                helperText={touched.observacao && errors.observacao}
                sx={{ gridColumn: "span 4" }}
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

export default Form;
