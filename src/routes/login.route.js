import { Router } from "express";
import { renderSignUpForm, signup, renderSignInForm, signin, renderWelcome, renderLogout, logout } from "../controllers/login.controller.js";

const router = Router();

router.get("/", renderSignUpForm);

router.post("/welcome", signup);

router.get("/signin", renderSignInForm);

router.get("/welcome", renderWelcome)

router.post("/welcome", signin);

router.get("/logout", renderLogout);

router.post("/logout", logout)

export default router;
