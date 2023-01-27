import { useState, useEffect } from 'react';
import GeneratedActivity from './GeneratedActivity';
import axios from 'axios';

const ActivityForm = ({ handleSubmit, boredProp, isVisible}) => {

    const [ userSelection, setUserSelection ] = useState("");

    const [ gifGenerator, setGifGenerator ] = useState(null);

    useEffect( () => {
        if (boredProp !== null) {
            axios({
                baseURL: 'https://api.giphy.com/v1/gifs/search',
                params: {
                    api_key: 'BIu9Bc57aem4i6oC5ioIc5KjHOuYYOfy',
                    q: boredProp,
                    limit: 1
                }
            }).then((apiData) => {
                setGifGenerator(apiData.data.data[0].images.original.url);
            })
        }
    }, [boredProp]);

    const handleChange = (e) => {
        setUserSelection(e.target.value);
    }


    return (
        <section className='activityForm'>
            {/* ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"] */}
            <form action="" onSubmit={(event) => { handleSubmit(event, userSelection)} }>
                <label htmlFor="filtration">Choose a type of activity you'd like to do to combat bordem.</label>
                <select id="filtration" onChange={ handleChange } defaultValue={ 'placeholder' }>
                    <option value="placeholder" disabled>Choose a type of activity 👇🏽</option>
                    <option value="education">Education 📖</option>
                    <option value="recreational">Recreational 🚙</option>
                    <option value="social">Social 🧑‍🤝‍🧑</option>
                    <option value="diy">Do it Yourself 🛠️</option>
                    <option value="charity">Charity 🫴🏽</option>
                    <option value="cooking">Cooking 🍽️</option>
                    <option value="relaxation">Relaxation 🛁</option>
                    <option value="music">Music 🎵</option>
                    <option value="busywork">Busy Work 🐝</option>
                </select>
                <button>
                    {
                        isVisible
                            ? 'Hide this task'
                            : 'Generate a task'
                    }</button>

                    {
                        isVisible
                            ? <GeneratedActivity passBored={boredProp} passGif={gifGenerator}/>
                            : null
                    }
            </form>


        </section>
    )
}

export default ActivityForm;