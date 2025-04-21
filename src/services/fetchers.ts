import axios from "axios";
import { Product } from "../types/Product";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v2/product/categories`, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data.categories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
};

export const getProductsByCategory = async (categoryParam: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v2/product/get/${categoryParam}`,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    return response.data.products;
  } catch (error) {
    console.error("failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const fetchProductIds = async (
  productIds: string[]
): Promise<Product[]> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v2/product/cartproducts`,
      { ids: productIds }
    );
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch cart product ids:", error);
    throw error;
  }
};
