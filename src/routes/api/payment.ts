import { Router } from "express";
import { initiateStkPush } from "../../controllers/payment";

const router = Router();

router.post("/stkPush", initiateStkPush);

module.exports = router;
