import {drugs} from '../data/dataset.json';

/* Mock API request */
export function getDrugData(searchPhrase) {
  return drugs.filter(drug => drug?.name.includes(searchPhrase));
}
