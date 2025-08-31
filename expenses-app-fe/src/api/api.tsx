import axios from "axios";
import { Expense } from "../types/types";

const BASE_URL = "http://localhost:4001/expenses";

export const getExpenses = async (): Promise<Expense[]> => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching expenses", error);
    throw error;
  }
};

export const createExpense = async (
  expense: Omit<Expense, "id">
): Promise<Expense> => {
  try {
    const response = await axios.post(BASE_URL, expense);
    return response.data;
  } catch (error) {
    console.error(" Error creating expense ", error);
    throw error;
  }
};

export const updateExpense = async (
  id: string,
  updatedExpense: Omit<Expense, "id">
): Promise<Expense> => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedExpense);
    return response.data;
  } catch (error) {
    console.error(" Error updating expense ", error);
    throw error;
  }
};

export const deleteExpense = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting expense", error);
    throw error;
  }
};
