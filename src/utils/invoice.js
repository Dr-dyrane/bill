// src/utils/invoice.js
import { saveData, loadData } from './localStorage';

const INVOICE_KEY = 'invoices';

export const saveInvoice = (invoice) => {
  saveData(INVOICE_KEY, invoice);
};

export const loadInvoices = () => {
  return loadData(INVOICE_KEY) || [];
};
