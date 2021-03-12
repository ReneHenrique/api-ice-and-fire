import { Router } from 'express';

import PersonagensController from '../controllers/personagens'

const AppRoutes = Router()

AppRoutes.route('/aryastark')
  .get(PersonagensController.aryastark)
AppRoutes.route('/brandonstark')
  .get(PersonagensController.brandonstark)
AppRoutes.route('/catelynstark')
  .get(PersonagensController.catelynstark)
AppRoutes.route('/eddardstark')
  .get(PersonagensController.eddardnstark)
AppRoutes.route('/jonsnow')
  .get(PersonagensController.jonsnow)
AppRoutes.route('/sansastark')
  .get(PersonagensController.sansastark)
AppRoutes.route('/tyrionlannister')
  .get(PersonagensController.tyrionlannister)
AppRoutes.route('/will')
  .get(PersonagensController.will)
AppRoutes.route('/daenerystargaryen')
  .get(PersonagensController.daenerys)
AppRoutes.route('/daenerysbooks')
  .get(PersonagensController.daenerysbooks)
AppRoutes.route('/booksimage')
  .get(PersonagensController.booksimage)

export default AppRoutes