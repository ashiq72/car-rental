// import request, { gql } from "graphql-request";

// const masterUrl =
//   "https://api-eu-west-2.hygraph.com/v2/cllsbclmw2w3601t5df3n5l83/master";

// export const getCarsList = async () => {
//   const query = gql`
//     query MyQuery {
//       carlist {
//         carAvg
//         carType
//         createdAt
//         id
//         name
//         price
//         publishedAt
//         image {
//           id
//           url
//         }
//         carBrand
//       }
//     }
//   `;
//   const result = await request(masterUrl, query);
//   return result;
// };

// export const getStoreLocation = async () => {
//   const query = gql`
//     query MyQuery {
//       storesLocations {
//         address
//       }
//     }
//   `;
//   const result = await request(masterUrl, query);
//   return result;
// };

// export const createBooking = async (formValue: any) => {
//   const mutationQuery =
//     gql`
//     mutation MyMutation {
//       createBooking(
//         data: {
//           userName: "` +
//     formValue.userName +
//     `"
//           pickUpDate: "` +
//     formValue.pickUpDate +
//     `"
//           pickUpTime: "` +
//     formValue.pickUpTime +
//     `"
//           dropOffDate: "` +
//     formValue.dropOffDate +
//     `"
//           dropOffTime: "` +
//     formValue.dropOffTime +
//     `"
//           contactNumber: "` +
//     formValue.contactNumber +
//     `"
//           carId: { connect: { id: "` +
//     formValue.carId +
//     `" } }
//         }
//       ) {
//         id
//       }
//     }
//   `;
//   const result = await request(masterUrl, mutationQuery);
//   return result;
// };
