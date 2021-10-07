import * as userService from "../services/login.service.js";

export async function renderSignUpForm(req, res) {
  try {
    res.render("main");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function signup(req, res) {
  const { body } = req;

  try {
    const usuario = await userService.signup(body);
    req.session.user = usuario;
    req.session.admin = true;
    res.redirect("welcome");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function renderSignInForm(req, res) {
  try {
    res.render("signin");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function signin(req, res) {
  const { name, password } = req.body;

  try {
    const usuario = await userService.signin({ name, password });
    if (usuario) {
      req.session.user = usuario;
      req.session.admin = true;
      res.redirect("welcome");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function renderWelcome(req, res) {
  try {
    res.render("welcome", {usuario: req.session.user});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function renderLogout(req, res) {
  try {
    res.render("logout", {usuario: req.session.user});
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function logout(req, res) {
  try {
    res.render("logout", {usuario: req.session.user});
    req.session.destroy((err) => {
      if (!err) {
        console.log("logout realizado");
      } else {
        res.json({ message: err });
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
