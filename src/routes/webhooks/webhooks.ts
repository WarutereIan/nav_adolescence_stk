import { Router } from "express";
import { processDarajaResponse } from "../../webhooks/stkPush";

const router = Router();

router.post("/stkPush", processDarajaResponse);

module.exports = router;
