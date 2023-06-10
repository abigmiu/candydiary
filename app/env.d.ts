/// <reference types="vite/client" />

// 该文件作用是为了在ts中使用import.meta.env
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
