import API from "./Api";

const isMock = process.env.REACT_APP_DEVELOP === "true";

const endpointUrl = process.env.REACT_APP_URL;
const urls = {
  apiUrl: !isMock ? endpointUrl : "/mock",
  getSucursales: () => (!isMock ? "sucursal" : "sucursales.json"),
  getAgenda: (id) => (!isMock ? `agenda/get/${id}` : "horas.json"),
  checkPatientExists: (type, id) => !isMock ? `Paciente/check/${type}/${encodeURIComponent(id.replaceAll(".", ""))}` : "existePaciente.json",
  saveAppointment: () => !isMock ? "agenda/post": "agendar.json",
};

const ValcorApi = API(urls.apiUrl);

const getSucursales = () => ValcorApi.Get(urls.getSucursales());
const getAgenda = (id) => ValcorApi.Get(urls.getAgenda(id));
const checkPatientExists = (type, id) =>
  ValcorApi.Get(urls.checkPatientExists(type, id));
const saveAppointment = (payload) => !isMock ? ValcorApi.Post(urls.saveAppointment(), payload) : ValcorApi.Get(urls.saveAppointment());

export default {
  getSucursales,
  getAgenda,
  checkPatientExists,
  saveAppointment,
};
