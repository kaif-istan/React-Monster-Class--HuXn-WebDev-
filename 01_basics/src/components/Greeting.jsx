const Greeting = ({timeOfDay}) => {
  if (timeOfDay == "morning") {
    return <h1>Good morning!</h1>
  } else if (timeOfDay == "afternoon") {
    return <h1>Good afternoon!</h1>
  } else {
    return <h1>Good day!</h1>
  }
}

export default Greeting