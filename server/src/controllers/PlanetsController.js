import { Auth0Provider } from "@bcwdev/auth0provider";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPlanet)


    }
    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const userInfo = request.userInfo
            planetData.galaxyId = userInfo.id
            const planet = await planetsService.createPlanet(planetData)
            return response.send(planet)
        } catch (error) {
            next(error)
        }
    }




}

