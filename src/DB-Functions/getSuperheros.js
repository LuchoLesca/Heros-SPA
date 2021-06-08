import getSuperherosDC from "./getSuperherosDC";
import getSuperherosMarvel from "./getSuperherosMarvel";

const getSuperheros = () => {
    return getSuperherosDC().concat(getSuperherosMarvel())
}

export default getSuperheros;