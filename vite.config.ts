import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), viteTsconfigPaths(), pluginRewriteAll(), svgrPlugin()],
   server: {
      port: 3000,
   },
});
