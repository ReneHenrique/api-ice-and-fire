import axios from 'axios';

import { Request, Response } from "express";

class PersonagensController {
    public aryastark(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/148').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }
    public brandonstark(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/208').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }

    public catelynstark(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/232').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }
    public eddardnstark(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/339').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }

    public jonsnow(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/583').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }

    public sansastark(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/957').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }

    public tyrionlannister(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/1052').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }

    public will(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/1109').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }
    public daenerys(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/1303').then((response) => {
            res.send(response.data)
        }).catch((error) => {
            throw new Error(error)
        })
    }

    public daenerysbooks(req: Request, res: Response) {
        axios.get('https://anapioficeandfire.com/api/characters/1303'
        ).then((response) => {

            res.send(response.data.povBooks)

        }).catch((error) => {
            throw new Error(error)
        })

    }
    public booksimage(req: Request, res: Response) {
        axios.get('https://covers.openlibrary.org/b/id/9269962-L.jpg', { responseType: 'arraybuffer' }
        ).then((response) => {

            res.send(Buffer.from(response.data, 'binary').toString('base64'))

        }).catch((error) => {
            throw new Error(error)
        })
    }
}

export default new PersonagensController();