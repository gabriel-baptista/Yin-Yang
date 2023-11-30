import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import recipeHook from "../api/hooks/recipe";

const initialValues = {
  nome: "",
  ingredientes: "",
  modo_preparo: "",
};

// validação para cada campo do formulario
const userSchema = yup.object().shape({
  nome: yup.string().required("Campo necessário"),
  ingredientes: yup.string().required("Campo necessário"),
  modo_preparo: yup.string().required("Campo necessário"),
});

const EditRecipe = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = React.useState(initialValues);

  const handleFormSubmit = (values) => {
    recipeHook.set(
      {
        nome: values.nome,
        ingredientes: values.ingredientes,
        modo_preparo: values.modo_preparo,
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
                label="ingredientes"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ingredientes}
                multiline minRows={3}
                name="ingredientes"
                error={!!touched.ingredientes && !!errors.ingredientes}
                helperText={touched.ingredientes && errors.ingredientes}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Modo de Preparo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.modo_preparo}
                multiline minRows={3}
                name="modo_preparo"
                error={!!touched.modo_preparo && !!errors.modo_preparo}
                helperText={touched.modo_preparo && errors.modo_preparo}
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

export default EditRecipe;
