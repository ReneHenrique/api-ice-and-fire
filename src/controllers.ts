import axios from 'axios';
import { Request, Response } from "express";




class CharactersRepository {
    public  indexPersonagens ( req: Request, res: Response) {
        axios.post('https://anapioficeandfire.com/api/characters/148').then((response)=>{
            console.log(response.data);
            res.send(response.data)
        })
    }
    
}

export default  CharactersRepository ;
