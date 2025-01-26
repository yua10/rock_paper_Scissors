const db = require("../db/connect")

class Country {
  constructor({ country_id, name, continent, population, capital }) {
    this.id = country_id
    this.name = name
    this.continent = continent
    this.population = population
    this.capital = capital
  }

  static async getAll() {
    try {
      const { rows } = await db.query("SELECT * FROM country;")
      if (!rows.length) {
        throw new Error("No countries found")
      }
      return rows.map((country) => new Country(country))
    } catch (error) {
      throw new Error("Error fetching countries")
    }
  }

  static async getOne(name) {
    try {
      const { rows } = await db.query("SELECT * FROM country WHERE name = $1;", [name])
      if (!rows.length) {
        throw new Error("No country found")
      }
      return new Country(rows[0])
    } catch (error) {
      throw new Error("Error fetching country")
    }
  }

  static async create(data) {
    const { name, continent, population, capital } = data
    const { rows } = await db.query('INSERT INTO country(name, continent, population, capital) VALUES ($1, $2, $3, $4) RETURNING *', [name, continent, population, capital])
    const countryName = rows[0].name
    const newCountry = await Country.getOne(countryName)
    return newCountry
  }

  async update(data) {
    try {

      const { name, continent, population, capital } = data
      const { rows } = await db.query('UPDATE country SET (name, continent, population, capital) = ($1, $2, $3, $4) WHERE name = $5 RETURNING *;', [name, continent, population, capital, this.name])
      if (rows.length !== 1) {
        throw new Error ("Not able to update country")
      }
      return new Country(rows[0])
      } catch (error) {
        throw new Error("Error updating country")
      }
  }

  async destroy() {
    const { rows } = await db.query('DELETE FROM country WHERE name = $1 RETURNING *;', [this.name])
    if (rows.length !== 1){
      throw new Error("Not able to delete country")
    }
    return new Country(rows[0])
  }
}

module.exports = Country
