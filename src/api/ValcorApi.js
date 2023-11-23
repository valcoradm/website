import API from "./Api";

const isMock = process.env.REACT_APP_DEVELOP === "true";

const endpointUrl = process.env.REACT_APP_URL;
const urls = {
  apiUrl: !isMock ? endpointUrl : "/mock",
  getSucursales: () => (!isMock ? "sucursal" : "sucursales.json"),
  getAgenda: (id) => (!isMock ? `agenda/get/${id}` : "agenda.json"),
  checkPatientExists: (type, id) => `Paciente/check/${type}/${encodeURIComponent(id.replaceAll(".", ""))}`,
};

const ValcorApi = API(urls.apiUrl);

const getSucursales = () => ValcorApi.Get(urls.getSucursales());
const getAgenda = (id) => ValcorApi.Get(urls.getAgenda(id));
const checkPatientExists = (type, id) =>
  ValcorApi.Get(urls.checkPatientExists(type, id));

export default {
  getSucursales,
  getAgenda,
  checkPatientExists,
};
