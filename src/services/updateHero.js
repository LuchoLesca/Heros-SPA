const updateHero = (originalName, hero={}) => {
    console.log(`Hero ${originalName||""} updated with info:`)
    console.log(hero)
}

export default updateHero;