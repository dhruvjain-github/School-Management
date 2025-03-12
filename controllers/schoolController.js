const School = require("../models/schoolModel");


async function addSchool(req, res) {
    const { name, address, latitude, longitude } = req.body;
    
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const existingSchool = await School.findByName(name);
        if (existingSchool) {
            return res.status(400).json({ error: "School already exists." });
        }

        await School.addSchool(name, address, latitude, longitude);
        res.status(201).json({ message: "School added successfully!" });
        
    } catch (error) {
        res.status(500).json({ error: "Database error: " + error.message });
    }
    
}


async function listSchools(req, res) {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: "Latitude and Longitude are required." })
    }

    try {
        const schools = await School.getSchools(parseFloat(lat), parseFloat(lng))
        res.json(schools);
    } catch (error) {
        res.status(500).json({ error: "Database error: " + error.message });
    }
}

module.exports = { addSchool, listSchools }
