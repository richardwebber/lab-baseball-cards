// importing player data from our playerData.js file. 
// This file has each player and their information for our baseball cards.
// import useState from react.
// We will use useState to toggle between the front of the baseball card and the back.
import playerData from './playerData.js'
import  { useState } from 'react'

// Here we are creating our function to create our card, display our card and toggle between front and back.
function BaseballCard(props) {
  // Setting up our useState hook. 
  // We will set our initial useState to true and will change it to false when the user clicks a card.
  const [showPicture, setShowPicture] = useState(true);
  // Create the function that we will be using for our eventhandler.
  // When toggleCard is invoked, setShowPicture will look at the value of showpicture and change its value to the opposite of that value.
  // This works because the value can only be true or false.
  const toggleCard = () => {
    setShowPicture(!showPicture)
  }
  // The way you would read this line would be "if true"...
  if (showPicture) {
    // If showPicture value is true, our function will return a div with respected values from our playerData.js
    return (
      // We will be giving our a div a className of card for our css styling.
      // We will attach our event handler to our div as well so that we can toggle between the front and the back of the card.
      // Our h2 will display each players name. 
      // Props will be a deconstructed playerData object with specif values based off of the key value pairs found in playerData array.
      // We will use dot notation to get the values for our given h2 and img tags.
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
    // If showPicture value is False, our functin below will return a div with the respected values from our playerData.js
  } else {
    // Create a variable that will store our player stats. 
    // The Object.entries will convert our stats object into an array of respected [key, value] pairs.
    // The map function is called on the array of [key, value] pairs obtained from Object.entries.
    // The callback function inside map takes each [key, value] pair as an argument and 
    // destructures it into two variables: statName and statValue.
    // Body of the callback function return JSX element with respected values.
    // We set a key={statName} so that react can better recognize if the DOM has changed. 
    const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
      <p key={statName}>
        {statName}: {statValue}
      </p>
    ));
    // Once we have fallen though our Else condition, we will return JSX with our new built statsDisplay JSX element added.
    // The JSX we are returning is the back of our player card.
    // className is set to 'card' for CSS styling.
    // We also need to attach our event handler to our backside of the card to toggle between front and back.
    // As we did before, use dot notation to access the correct values for our JSX elements.
    // Finally we call our statsDisplay function so that it can return the appropriate JSX elements.
    return (
      <div className='card' onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>Team: {props.team}</p>
        <p>Position: {props.position}</p>
        {statsDisplay}
      </div>
    );
  }
}


// Function that returns all the JSX elements needed to build our page.
// We will export this function to our main.jsx file to finish our React application.
function App() {
  // Creating a variable called cards that will represent each player along with all player data.
  // The map function loops through the player data array.
  // Each player object is then passed to our BaseballCard function so that it can build the correct JSX elements.
  // We destructure the player object and pass them in as properties to our BaseballCard function.
  // We give them respected variables to make it easier to use dot notation in our BaseballCard function.
  const cards = playerData.map((player) => (
  <BaseballCard 
  name={player.name}
  team={player.team}
  position={player.position}
  stats={player.stats}
  imgUrl={player.imgUrl}
  id={player.cardId}
  />
  ));
  // Once we are done combining all our JSX elements, we return a tag with our JSX final JSX element.
  // Some people will return it in a <div>{cards}<div> but we can also leave the tags blank.
  return <>{cards}</>
}
// Export this puppy to be used in our main.jsx
export default App;

