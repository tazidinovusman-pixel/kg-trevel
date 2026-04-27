// company_List 
import { api } from "../axios";

const companyService = {
  getAll: async () => {
    const { data, error } = await api.get("/tour_list");

    if (error) {
      console.log("Ошибка загрузки:", error);
      return [];
    }

    return data;
  },
};

export default companyService;