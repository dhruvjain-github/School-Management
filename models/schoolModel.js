const db = require("../config/db");

async function addSchool(name, address, latitude, longitude) {
    const query = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
    await db.query(query, [name, address, latitude, longitude]);
}

async function getSchools(userLat, userLng) {
    const query = `SELECT id, name, address, latitude, longitude FROM schools`;
    const [schools] = await db.query(query);

    schools.forEach((school) => {
        const R = 6371; 
        const dLat = (school.latitude - userLat) * (Math.PI / 180);
        const dLon = (school.longitude - userLng) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(userLat * (Math.PI / 180)) *
                Math.cos(school.latitude * (Math.PI / 180)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        school.distance = R * c; 
    });

    schools.sort((a, b) => a.distance - b.distance);
    return schools;
}

async function findByName(name) {
    const query = `SELECT * FROM schools WHERE name = ? LIMIT 1`;
    const [result] = await db.query(query, [name]);

    return result.length > 0 ? result[0] : null; 
}

module.exports = { addSchool, getSchools, findByName };
