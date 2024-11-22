const BASE_URL = "http://localhost:5000/api";

const fetchApi = async (endpoint, method = "GET", body = null, token = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

 if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

export const getExpenses = async (token) => {
  return await fetchApi("/expenses", "GET", null, token);
};

export const addExpense = async (expense, token) => {
  return await fetchApi("/expenses", "POST", expense, token);
};

export const deleteExpense = async (expenseId, token) => {
  return await fetchApi(`/expenses/${expenseId}`, "DELETE", null, token);
};

export const updateExpense = async (expenseId, updatedData, token) => {
  return await fetchApi(`/expenses/${expenseId}`, "PUT", updatedData, token);
};
