function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const phraseGenerator = ({
  adjectives: {
    creative: creativeAdjectives,
    personal: personalAdjective,
    professional: professionalAdjective,
    technical: technicalAdjective,
    provocative: provocativeAdjective,
  },
  nouns: {
    creative: creativeNouns,
    personal: personalNouns,
    professional: professionalNouns,
    technical: technicalNouns,
    provocative: provocativeNouns,
  },
}) => {
  const randomizedPhrases = {
    adjectives: [
      shuffle(creativeAdjectives),
      shuffle(personalAdjective),
      shuffle(professionalAdjective),
      shuffle(technicalAdjective),
      shuffle(provocativeAdjective),
    ],

    nouns: [
      shuffle(creativeNouns),
      shuffle(personalNouns),
      shuffle(professionalNouns),
      shuffle(technicalNouns),
      shuffle(provocativeNouns),
    ],
  }

  return randomizedPhrases
}

export default phraseGenerator
