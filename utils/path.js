import path from 'path';
import { fileURLToPath } from 'url';

const rooPath = path.dirname(fileURLToPath(import.meta.url));
export default rooPath;