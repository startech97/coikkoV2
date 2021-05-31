import { Request, Response } from "express";
import sequelize from '../connection'
import {QueryTypes} from 'sequelize'
export const login = async(req: Request,res: Response)=> {
    try{
        const data = await  sequelize.query("select * from [dbo].[auth] where code_ou = :code_ou", {
            replacements: {code_ou: String(req.body.code_ou.value)},
            type: QueryTypes.SELECT,
            logging: false
        })
        interface User {
            id?: number
            name_ou?: string
            district?: string
            code_ou?: string
            password?: string
            departament?: boolean
        }
        const candidate :User = data[0]
        if(candidate) {
            if(candidate.password === req.body.password.value) {
                res.json({"login":"true"})
            }else {
                console.log('пароли не совпадают')
            }
        }else {
            console.log('Ничего не найдено ')
        }
    }catch {
        console.log('error')
    }
    
}