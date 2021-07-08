import { DetailsInfo } from "../../MockApi";

export const BindInfo = async (recipeId) => {
  try {
    const data = await DetailsInfo(recipeId);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
