import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../lib/ironSessionConfig";

export default withIronSessionApiRoute(
  function logoutRoute(req, res) {
    req.session.destroy();
    res.send({ ok: true });
  }, ironOptions
);