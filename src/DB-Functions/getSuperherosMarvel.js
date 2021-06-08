const marvelData = require("../data/datamarvel.json");

const getSuperherosMarvel = () => {
    return marvelData.slice(0, 20);
}

export default getSuperherosMarvel;