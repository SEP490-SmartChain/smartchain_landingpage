const DEFAULT_ADMIN_URL = 'https://console.orcaaxis.tech';

const rawAdminUrl = import.meta.env.VITE_ADMIN_URL?.trim() || DEFAULT_ADMIN_URL;
const withProtocol = /^https?:\/\//i.test(rawAdminUrl) ? rawAdminUrl : `https://${rawAdminUrl}`;
const normalizedAdminBaseUrl = withProtocol.endsWith('/') ? withProtocol : `${withProtocol}/`;

export const ADMIN_LOGIN_URL = new URL('login', normalizedAdminBaseUrl).toString();
export const ADMIN_REGISTER_URL = new URL('register', normalizedAdminBaseUrl).toString();
