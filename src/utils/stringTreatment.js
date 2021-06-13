const capitalize = (str) => {
    if (str) {
        const words = str.split(" ");
    
        const sentence = words.map((word) => {
                                if (word !== "") return word[0].toUpperCase() + word.substring(1);
                                return ""
                            }).join(" ");
    
        return sentence
    }
    return ""
}

export {capitalize}