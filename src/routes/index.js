import { Router } from "express";

const router = Router();
router.get('/', (req, res) =>res.render('index.ejs', {title: 'Bienvenido'}));
router.get('/login', (req, res) =>res.render('login.ejs', {title: 'Registro'}));
router.get('/contactanos', (req, res) =>res.render('contactanos.ejs', {title: 'contactame'}));
router.get('/head', (req, res) =>res.render('head.ejs', {title: 'Registro'}));
export default router;