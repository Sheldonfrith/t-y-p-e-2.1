import React from 'react';
import TypingArea from './typing-area/TypingArea';
import CurrentSettingsArea from './CurrentSettingsArea';
import CurrentStatsArea from './CurrentStatsArea';

export default function TrainingArea() {
    return (
        <div>
            <TypingArea/>
            <CurrentStatsArea/>
            <CurrentSettingsArea/>  
        </div>
    );
}