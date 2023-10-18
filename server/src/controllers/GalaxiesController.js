import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsService.js";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getGalaxies)
            .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createGalaxy)

    }


    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxiesService.getGalaxies()
            return response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }


    async getPlanetsByGalaxyId(request, response, next) {
        try {
            const galaxyId = request.params.galaxyId
            const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
            return response.send(planets)
        } catch (error) {
            next(error)
        }
    }



    async createGalaxy(request, response, next) {
        try {
            const galaxyData = request.body
            const userInfo = request.userInfo
            galaxyData.creatorId = userInfo.id
            const galaxy = await galaxiesService.createGalaxy(galaxyData)
            return response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}