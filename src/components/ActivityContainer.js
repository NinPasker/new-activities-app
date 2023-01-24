import ActivityForm from "./ActivityForm";

import axios from "axios";
import { useEffect, useState } from 'react';

// giphy key

// BIu9Bc57aem4i6oC5ioIc5KjHOuYYOfy

const ActivityContainer = () => {
    const [ boredData, setBoredData ] = useState(null); // initialize state to hold boredApi response
    const [ userSelection, setUserSelection ] = useState(null); // initialize state to hold users selection

    // api call being made to the bored api on component mount. 
    useEffect( () => {
        axios({
            baseURL: 'https://www.boredapi.com/api/activity',
            params: {
                type: userSelection
            }
        }).then( (apiData) => {
            setBoredData(apiData.data.activity);
        })
    }, [userSelection]);

    // setting a function to prevent default form behaviour and setting the userSelection to state.
    const userActivity = (event, userSelection) => {
        event.preventDefault();
        
        setUserSelection(userSelection);
    }

    // mounting ActivityForm whilst passing both userActivity function & boredData via props to be used in that component. 
    return (
        <section>
            <ActivityForm handleSubmit={userActivity} boredProp={boredData}/>
        </section>
    )


}

export default ActivityContainer;

// PSEUDO CODE //

// Tested both APIs to make sure data is being received to use
// Create state items to hold data from API's & the user's selection for what kind of activity they would like to see

// On component mount, we wait for user interaction to trigger a method to display selected activity to do along with a corresponding gif to match the activity.

// Render app
// 1. nav
// 2. header
// 3. form with user selection to generate chosen activity
// 4. use api data from user selection in the results component
// STRETCH GOAL
// 5. if user chooses to save this activity find a way to implement firebase to hold this info and also make it dynamic so that it can be greyed out after checked off

// ** Results component (GiphyComponent) **
// Pass info via props from activity component to GiphyComponent to display the result from user selection

