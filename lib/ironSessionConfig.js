export const ironOptions = {
    cookieName: "gestor_modular_session",
    password: process.env.IRON_SESSION_COOKIE_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };