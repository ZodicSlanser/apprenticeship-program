const API_ERROR = 400;
const API_CONFIG = { hostname: "localhost", PORT: 9000, scheme: "http" };
let API_URL = `${API_CONFIG.scheme}://${API_CONFIG.hostname}:${API_CONFIG.PORT}/apprenticeship`;
const API_ROUTES = {
  viewApprenticeship: `${API_URL}/view`,
  addApprenticeship: `${API_URL}/add`,
  duplicateApprenticeship: `${API_URL}/duplicate`,
  viewAllApprenticeships: `${API_URL}/view-all`,
  deleteApprenticeship: `${API_URL}/delete`,
  updateApprenticeship: `${API_URL}/update`,
  addValue: `${API_URL}/add-value`,
};
export { API_ROUTES };
