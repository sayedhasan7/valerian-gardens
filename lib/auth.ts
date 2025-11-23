export const isLoggedIn = () => {
  if (typeof window === "undefined") return false; // SSR safe
  return !!sessionStorage.getItem("token");
};

export const logout = () => {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("token");
};
