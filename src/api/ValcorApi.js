import API from "./Api";

const isMock = process.env.REACT_APP_DEVELOP === "true";

const endpointUrl = process.env.REACT_APP_URL;
const urls = {
  apiUrl: !isMock ? endpointUrl : "/mock",
  getSucursales: !isMock ? "sucursal" : "sucursales.json",
}

const ValcorApi = API(urls.apiUrl);

const getSucursales = () => ValcorApi.Get(urls.getSucursales);

export default {
  getSucursales,
};
