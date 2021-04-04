import React from 'react';
import CharacterInfo from './CharacterInfo';
import Loading from '../seriesImage/spinner.gif';

const Character = ({character,loading}) => {
    return loading ? 
    (
        <div className='Loading-div'>
            <img className='Loading-img' src={Loading} alt='Loading'/>
        </div>
    ) : 
    (
        <div className='character-grid'>
            {character.map((char) => (
                <CharacterInfo key={char.char_id} char={char}/>
            ))}
        </div>
    )
}

export default Character;
