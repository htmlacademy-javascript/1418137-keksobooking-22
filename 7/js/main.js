import { createTemporaryData } from './create-temporary-data.js';
import { render } from './popup.js';
import './form.js';

const similarAds = createTemporaryData(1);
render(similarAds[0]);
