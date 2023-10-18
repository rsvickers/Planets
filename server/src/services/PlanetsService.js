import { dbContext } from "../db/DbContext.js"

class PlanetsService {
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

    async getPlanetsByGalaxyId(galaxyIdFromParams) {
        const planets = await dbContext.Planets.find({ galaxyId: galaxyIdFromParams })
        return planets
    }

}


export const planetsService = new PlanetsService()