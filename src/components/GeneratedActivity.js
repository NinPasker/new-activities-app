const GeneratedActivity = ({passBored, passGif}) => {

    return (
        <section>
            <h3>Here's your activity to do:</h3>
            <p>✨ {passBored} ✨</p>
            <img src={passGif} alt={passBored} />
        </section>
    )
}

export default GeneratedActivity;