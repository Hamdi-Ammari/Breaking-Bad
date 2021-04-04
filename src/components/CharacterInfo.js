import React from 'react'

const CharacterInfo = ({char}) => {

    const setCharStatus = (status) =>{
        if(status === 'Alive') {
            return 'green';
        } else{
            return 'red';
        }
    };
    return (
        <div className='character-item'>
            <div className='card'>

                <div className='front'>
                    <img className='character-img' src={char.img} alt={char.name} />
                </div>
                
                <div className='back'>
                    <h2 className='char-name'>{char.name}</h2>
                    <h3 className='char-nickname'>({char.nickname})</h3>
                    <h3 className={setCharStatus(char.status)}>{char.status}</h3>
                    <h4 className='char-portrayed'>{char.portrayed}</h4>
                </div>
            

            </div>
        </div>
    );
}

export default CharacterInfo;

