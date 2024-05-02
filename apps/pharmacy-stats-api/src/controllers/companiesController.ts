import companiesService from '../services/companies.service';
const getCompanies = async (req, res) => {
  const response = companiesService();
  res.send(response);
};

export default getCompanies;
