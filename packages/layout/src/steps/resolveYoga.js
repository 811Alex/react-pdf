import { loadYoga } from '../yoga/index.js';

const resolveYoga = async root => {
  const yoga = await loadYoga();

  return Object.assign({}, root, { yoga });
};

export default resolveYoga;
