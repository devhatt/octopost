import React, { useState, useEffect } from 'react';

import {
  FacebookSVG,
  GithubSVG,
  InstagramSVG,
  LinkedinSVG,
  ThreadsSVG,
  TwitterSVG,
} from './images/exports';

import scss from '../CharacterLimit/CharacterLimit.module.scss';

import { ICharacterLimitProps } from './CharacterLimit.types';

function CharacterLimit(props: ICharacterLimitProps) {
  const [counterZero, setCounterZero] = useState(false);
  const remainingCharacters = props.maxLength - props.value.length;

  useEffect(() => {
    if (remainingCharacters < 0) {
      setCounterZero(true);
      //console habilitado para verificar emissão de evento
      // eslint-disable-next-line no-console
      console.log(props.id);
    } else {
      setCounterZero(false);
    }
  }, [remainingCharacters]);

  const svgColor = counterZero
    ? `${scss.svgColor} ${scss.exceeded}`
    : scss.svgColor;
  const characterLimitClass = counterZero
    ? `${scss.characterLimit} ${scss.exceeded}`
    : scss.characterLimit;

  const SocialMediaIcon = {
    facebook: FacebookSVG,
    github: GithubSVG,
    instagram: InstagramSVG,
    linkedin: LinkedinSVG,
    threads: ThreadsSVG,
    twitter: TwitterSVG,
  }[props.id];

  return (
    <div className={svgColor}>
      {SocialMediaIcon && <SocialMediaIcon />}
      <div className={characterLimitClass}>
        <span>{remainingCharacters}</span>
      </div>
    </div>
  );
}

export default CharacterLimit;
