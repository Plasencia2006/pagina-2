import { Router } from "express";

const router = Router();
router.get('/', (req, res) =>res.render('index.ejs', {title: 'Venta productos'}));
router.get('/login', (req, res) =>res.render('login.ejs', {title: 'Login'}));
router.get('/contactanos', (req, res) =>res.render('contactanos.ejs', {title: 'Register'}));
export default router;