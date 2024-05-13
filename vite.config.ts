import react from '@vitejs/plugin-react-swc';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: { target: ['edge88', 'firefox85', 'chrome88', 'safari14', 'ios14'] },
  plugins: [react(), tsconfigPaths(), svgr()],
  resolve: { alias: { '~styles': path.join(__dirname, 'src/styles') } },
});
