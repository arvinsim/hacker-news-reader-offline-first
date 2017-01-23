import { createRouter } from '@exponent/ex-navigation'

import HomeContainer from '../routes/Home/index.js';
import DetailsContainer from '../routes/Details/index.js';

const Router = createRouter(() => ({
  home: () => HomeContainer,
  details: () => DetailsContainer,
}))

export default Router