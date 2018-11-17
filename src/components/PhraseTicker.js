import React from 'react'
import phraseKeywords from '../data/phraseKeywords'
import phraseGenerator from '../utils/phraseGenerator'

console.log(phraseGenerator(phraseKeywords))

const phrases = 'hey'

// position: relative;
// top: 5px;
// opacity: .1;

// https://github.com/popmotion/popmotion

const PhraseTicker = () => (
  <div>
    <span>be </span>
    <span>{phrases}</span>
  </div>
)

export default PhraseTicker
