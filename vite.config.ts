import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsConfigPaths()
  ],
  test: {
    globals: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage'
    }
  }
});
