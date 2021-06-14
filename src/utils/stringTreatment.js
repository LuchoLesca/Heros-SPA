const capitalizeBegin = (word) => {
    if (word !== ""){
        return word[0].toUpperCase() + word.substring(1)
    }
    return ""
}


const capitalize = (str) => {
    if (str) {
        const words = str.split(" ");
        const sentence = words.map((word) => capitalizeBegin(word)).join(" ");
        return sentence.trimStart()
    }
    return ""
}

export {capitalize, capitalizeBegin}