import { createTemporaryData } from './create-temporary-data.js';
import { render } from './popup.js';

const similarAds = createTemporaryData(1);
render(similarAds[0]);
