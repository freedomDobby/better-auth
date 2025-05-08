/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly MAIN_VITE_DB_PASSWORD: string
  readonly MAIN_VITE_DB_PORT: number
  readonly MAIN_VITE_DB_DATABASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}