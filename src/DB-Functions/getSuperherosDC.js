const dcData = require("../data/datadc.json");

const getSuperherosDC = () => {
    return dcData.slice(0, 20);
}

export default getSuperherosDC;