
const getPersons = async (req, res ) => {
    const body = req.bodya
    console.log("hello")
    res.status(200).json(
        {name:"kasper"}
    )
}

module.exports = {
    getPersons
}