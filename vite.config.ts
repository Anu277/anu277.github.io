import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

function getLastCommitDate() {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cI'], {
      encoding: 'utf8',
    }).trim()
  } catch {
    return new Date().toISOString()
  }
}

const lastCommitDate = getLastCommitDate()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __LAST_UPDATED__: JSON.stringify(lastCommitDate),
  },
})
