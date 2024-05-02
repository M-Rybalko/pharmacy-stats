import express from 'express';
import getCompanies from '../controllers/companiesController';

const companiesRouter = express.Router();

companiesRouter.get('/', getCompanies);

export default companiesRouter;
