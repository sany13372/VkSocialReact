//export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/user${string}`
export const getDialogUrl = (string: string) => `/dialog${string}`
export const getPostUrl = (string: string) => `/post${string}`
export const getLikeUrl = (string: string) => `/likes${string}`
