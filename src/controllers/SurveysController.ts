import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';
class SurveysController {

    async create(request:Request, repsonse: Response){
        const { title, description } = request.body;

        const surveyRepository = getCustomRepository(SurveysRepository);

        const survey = surveyRepository.create({
            title,
            description
        });

        await surveyRepository.save(survey);

        return repsonse.status(201).json(survey);
    }

    async show(request:Request,response:Response){
        const surveyRepository = getCustomRepository(SurveysRepository);
        const all = await surveyRepository.find();
        return response.json(all);
    }
}

export {SurveysController}