import React from 'react'
import {useHistory} from 'react-router-dom'

const AboutPage: React.FC = () => {
    const history = useHistory()

    return (
        <div>
            <h1>Информация</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda aut culpa cupiditate dolore illo nesciunt non officiis perspiciatis quibusdam?</p>
            <button className='btn' onClick={() => history.push('/')}>Назад к списку</button>
        </div>
    )
}

export default AboutPage

