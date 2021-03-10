import {Router} from 'express';

import CharactersRepository from './controllers';

const router = Router()

router.use('/iceandfire', CharactersRepository)