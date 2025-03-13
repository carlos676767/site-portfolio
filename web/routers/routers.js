import api from "express";
const router = api.Router();
import frameLimit from "express-rate-limit";
import ControllerEmail from "../controller/emailController.js";

const limiter = frameLimit({
  windowMs: 60 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).send({
      error: true,
      msg:
        "Você atingiu o limite de envios de e-mails. Por favor, tente novamente em 1 hora.",
    });
  },
});

router.use(limiter);
router.post(`/sendEmail`, ControllerEmail.sendEmail);

export default router;
