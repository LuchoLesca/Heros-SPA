const capitalize = (str) => {
    if (str) {
        const words = str.split(" ");
    
        const sentence = words.map((word) => { 
                                return word[0].toUpperCase() + word.substring(1); 
                            }).join(" ");
    
        return sentence
    }
    return ""
}

export {capitalize}