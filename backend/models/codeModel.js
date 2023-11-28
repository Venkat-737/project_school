import mongoose from "mongoose";

const codeSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Empty code"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Code", codeSchema);
