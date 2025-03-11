import API from "./Api";

const isMock = process.env.REACT_APP_DEVELOP === "true";

const endpointUrl = process.env.REACT_APP_URL;
const urls = {
  apiUrl: !isMock ? endpointUrl : "/mock",
  getSucursales: () => (!isMock ? "publicapi/sucursal" : "sucursales.json"),
  getAgenda: (id) => (!isMock ? `publicapi/agenda/get/${id}` : "horas.json"),
  checkPatientExists: (type, id) => !isMock ? `publicapi/Paciente/check/${type}/${encodeURIComponent(id.replaceAll(".", ""))}` : "existePaciente.json",
  saveAppointment: () => !isMock ? "publicapi/agenda/post": "agendar.json",
  getJwt: ({a,b,c}) => !isMock ? `correo/api/validar-link?a=${a}&b=${b}&c=${c}`: "jwt.json",
  getOrdenAtencion: (token) => !isMock ? `semipublic/Index/?token=${token}`: "orden-atencion-mail.json",
};

const ValcorApi = API(urls.apiUrl);

const getSucursales = () => ValcorApi.Get(urls.getSucursales());
const getAgenda = (id) => ValcorApi.Get(urls.getAgenda(id));
const checkPatientExists = (type, id) =>
  ValcorApi.Get(urls.checkPatientExists(type, id));
const saveAppointment = (payload) => !isMock ? ValcorApi.Post(urls.saveAppointment(), payload) : ValcorApi.Get(urls.saveAppointment());
const getJwt = (payload) => ValcorApi.Get(urls.getJwt(payload));
const getOrdenAtencion = (payload) => ValcorApi.Get(urls.getOrdenAtencion(payload));

const endpoint = {
  getSucursales,
  getAgenda,
  checkPatientExists,
  saveAppointment,
  getJwt,
  getOrdenAtencion,
};

export default endpoint;

