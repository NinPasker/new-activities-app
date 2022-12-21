import axios from "axios";

import { useState, useEffect} from 'react';

// giphy key

// BIu9Bc57aem4i6oC5ioIc5KjHOuYYOfy

// const Test = () => {
//     useEffect( () => {
//         axios({
//             baseURL: 'http://www.boredapi.com/api/activity',
//         }).then( (apiData) => {
//             console.log(apiData);
//         })
//     })

//     useEffect( () => {
//         axios({
//             baseURL: 'http://api.giphy.com/v1/gifs/random',
//             params: {
//                 api_key: 'BIu9Bc57aem4i6oC5ioIc5KjHOuYYOfy',
//                 tag: 'bored'
//             }            
//         }).then( (apiData) => {
//             console.log(apiData);
//         })
//     })
// }

// export default Test;

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

