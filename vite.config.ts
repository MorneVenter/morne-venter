import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import mkcert from 'vite-plugin-mkcert';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			typescript: { tsconfigPath: './tsconfig.json' },
			biome: { command: 'lint', flags: '--diagnostic-level=error' },
		}),
		tsconfigPaths(),
		mkcert(),
	],
	optimizeDeps: {
		exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
	},
	server: {
		port: 3000,
		fs: {
			strict: false,
		},
		cors: true,
	},
});
