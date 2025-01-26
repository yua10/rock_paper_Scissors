const Country = require("../models/Country")

const index = async (req, res) => {
    try {
        const countries = await Country.getAll()
        res.status(200).json({
            success: true,
            countries: countries
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to retrieve Countries",
            error: err
        })
    }
}


const show = async (req, res) => {
    try {
        const name = req.params.name
        const country = await Country.getOne(name)
        res.status(200).json({
            success: true,
            country: country
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to retrieve Country",
            error: err
        })
    }
}

const create = async (req, res) => {
    try {
        const data = req.body
        const country = await Country.create(data)
        res.status(201).json({
            success: true,
            country: country
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to create Country",
            error: err
        })
    }
}


const update = async (req, res) => {
    try {
        const name = req.params.name
        const data = req.body
        const country = await Country.getOne(name)
        const result = await country.update(data)
        res.status(200).json({
            success: true,
            country: result
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to update Country",
            error: err
        })
    }
}


const destroy = async (req, res) => {
    try {
        const name = req.params.name
        const country = await Country.getOne(name)
        const result = await country.destroy()
        res.sendStatus(204)
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Unable to delete Country",
            error: err
        })
    }
}

module.exports = {
    index, show, create, update, destroy
}