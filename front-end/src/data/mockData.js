import { tokens } from "../theme";
import Connection from "../api/Connection";

export const mockDataGet = () => {
  const config = [
    {
      url: "/patient/list",
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

export const mockLineData = [
  {
    id: " ",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        data: "01/03/2023",
        peso: 150.7,
      },
      {
        data: "02/03/2023",
        peso: 147.3,
      },
      {
        data: "03/03/2023",
        peso: 145,
      },
      {
        data: "04/03/2023",
        peso: 130,
      },
      {
        data: "05/03/2023",
        peso: 121,
      },
      {
        data: "06/03/2023",
        peso: 123,
      },
      {
        data: "07/03/2023",
        peso: 100,
      },
      {
        data: "08/03/2023",
        peso: 95,
      },
      {
        data: "09/03/2023",
        peso: 95.9,
      },
      {
        data: "10/03/2023",
        peso: 93.7,
      },
      {
        data: "11/03/2023",
        peso: 85,
      },
      {
        data: "12/03/2023",
        peso: 96.5,
      },
    ],
  },
];

export const mockWaterData = (id) => {
  const config = [
    {
      url: "/bioimpedance/info/water/" + id,
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
        resolve(response.data[0])
      )
      .catch(error =>
        reject(error)
      );
  })
};

export const mockWaterDataTeste = [
  {
    id: " ",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "01/03/2023",
        y: 150.7,
      },
      {
        x: "02/03/2023",
        y: 147.3,
      },
      {
        x: "03/03/2023",
        y: 145,
      },
      {
        x: "04/03/2023",
        y: 130,
      },
      {
        x: "05/03/2023",
        y: 121,
      },
      {
        x: "06/03/2023",
        y: 123,
      },
      {
        x: "07/03/2023",
        y: 100,
      },
      {
        x: "08/03/2023",
        y: 95,
      },
      {
        x: "09/03/2023",
        y: 95.9,
      },
      {
        x: "10/03/2023",
        y: 93.7,
      },
      {
        x: "11/03/2023",
        y: 85,
      },
      {
        x: "12/03/2023",
        y: 96.5,
      },
    ],
  },
];

// console.log(mockWaterData);
// export { mockWaterData };