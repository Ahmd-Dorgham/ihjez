import mongoose from "mongoose";
const { Schema, model } = mongoose;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    openingHours: {
      type: String,
      required: true,
    },
    profileImage: {
      secure_url: String,
      public_id: String,
    },
    layoutImage: {
      secure_url: String,
      public_id: String,
    },
    galleryImages: [
      {
        secure_url: String,
        public_id: String,
      },
    ],
    ownedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Restaurant = model("Restaurant", restaurantSchema);
export default mongoose.models.Restaurant || Restaurant;