import { Router } from "express";

const router = Router();
router.get('/', (req, res) =>res.render('index.ejs', {title: 'Bienvenido'}));
router.get('/servicios', (req, res) => res.render('servicios.ejs', { title: 'Nuestros servicios' }));
router.get('/contacto', (req, res) =>res.render('contacto.ejs', {title: 'contactame'}));
router.get('/asistente', (req, res) =>res.render('asistente.ejs', {title: 'Conversemos'}));
router.get('/head', (req, res) =>res.render('head.ejs', {title: 'Registro'}));
export default router;