import { cookies } from "next/headers";

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  // Keep original 'wms_session' compatibility if needed
  cookieStore.delete("wms_session"); 
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionData = cookieStore.get("admin_session")?.value || cookieStore.get("wms_session")?.value;
  
  if (!sessionData) return null;
  
  try {
    return JSON.parse(sessionData);
  } catch (e) {
    return null;
  }
}

export async function login(payload: any) {
  const cookieStore = await cookies();
  cookieStore.set("admin_session", JSON.stringify(payload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
