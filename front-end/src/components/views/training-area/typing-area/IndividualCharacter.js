import React from 'react';

export default function IndividualCharacters (props) {
    return (
        <span id={props.index+'IndividualCharacter'} className={`${props.backgroundColor}Background ${props.textColor}Text TypingAreaChild`}>{props.char}</span>
    );
}