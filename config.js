import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PEODUCTION
  ? "http://3.110.242.244//api/v1/saranshrealtorsindia/"
  : "http://localhost:8000/api/v1/saranshrealtorsindia";

export const App_NAME = publicRuntimeConfig.App_NAME;
