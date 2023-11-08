import API from "./Api";

const endpointUrl = process.env.REACT_APP_URL;
const urls = {
  apiUrl: !process.env.REACT_APP_DEVELOP ? endpointUrl : "/mock",
  getSucursales: !process.env.REACT_APP_DEVELOP ? "sucursal" : "sucursales.json",
}

const ValcorApi = API(urls.apiUrl);

const getSucursales = () => ValcorApi.Get(urls.getSucursales);

export default {
  getSucursales,
};
