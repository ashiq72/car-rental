import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query MyQuery {
      carlist {
        id
        carBrand
        carAvg
        carType
        createdAt
        price
        name
        image
        updatedAt
      }
    }
  `;
  const result = await request(
    "https://api-eu-west-2.hygraph.com/v2/cllsbclmw2w3601t5df3n5l83/master",
    query
  );
  return result;
};
