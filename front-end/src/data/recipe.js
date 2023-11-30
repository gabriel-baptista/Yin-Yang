import Connection from "../api/Connection";

// export const recipe = [
//   {
//     id: 1,
//     nome: "Salada de Frutas",
//     ingredientes: [
//       "1 maçã cortada em cubos",
//       "1 banana fatiada",
//       "1 xícara de morangos",
//       "1/2 xícara de uvas",
//       "1 colher de sopa de mel",
//     ],
//     modo_de_preparo:
//       "Misture todas as frutas em uma tigela, regue com mel e sirva.",
//   },
//   {
//     id: 2,
//     nome: "Omelete de Espinafre",
//     ingredientes: [
//       "2 ovos",
//       "1 xícara de espinafre picado",
//       "Sal e pimenta a gosto",
//       "1 colher de chá de azeite de oliva",
//     ],
//     modo_de_preparo:
//       "Bata os ovos, adicione o espinafre, sal e pimenta. Aqueça o azeite em uma frigideira, despeje a mistura e cozinhe até firmar.",
//   },
//   {
//     id: 3,
//     nome: "Smoothie Verde",
//     ingredientes: [
//       "1 banana",
//       "1 xícara de espinafre",
//       "1/2 abacate",
//       "1/2 xícara de água de coco",
//     ],
//     modo_de_preparo:
//       "Coloque todos os ingredientes no liquidificador, bata até ficar cremoso e sirva imediatamente.",
//   },
// ];
export const recipe = () => {
  const config = [
    {
      url: "/recipe/list",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json:charset=UTF-8",
      },
      params: {},
    },
    null,
  ]

  return new Promise((resolve, reject) => {
    Connection.makeApiResult(...config)
      .then(response =>
        resolve(response.data)
      )
      .catch(error =>
        reject(error)
      );
  })
};