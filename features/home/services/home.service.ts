import client from "@/core/api/client";
import { URL_CONSTANTS } from "../constants/url.constants";
import { HomeResponseType } from "../types/home.types";

export const homeService = {
    getHomeData: async (): Promise<HomeResponseType> => {
        const response = await client.get<HomeResponseType>(URL_CONSTANTS.HOME);
        return response.data;
    },
}; 