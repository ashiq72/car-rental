import { Schema, model, models } from "mongoose";

const CarInfoSchema = new Schema({
  carName: {
    type: String,
    required: [true, "name is required."],
  },
  carDesc: {
    type: String,
    required: [true, "carDesc is required."],
  },
  carPrice: {
    type: Number,
    required: [true, "carPrice is required."],
  },
});

const CarInfo = models.CarInfo || model("CarInfo", CarInfoSchema);

export default CarInfo;
