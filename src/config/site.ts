const adminBaseUrl = import.meta.env.VITE_ADMIN_URL?.trim();

if (!adminBaseUrl) {
  throw new Error('VITE_ADMIN_URL is required');
}

const normalizedAdminBaseUrl = adminBaseUrl.endsWith('/') ? adminBaseUrl : `${adminBaseUrl}/`;

export const ADMIN_LOGIN_URL = new URL('login', normalizedAdminBaseUrl).toString();
