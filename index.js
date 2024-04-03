const element = (
  // Write your code here.
  <div classname='bg-container'>
    <h1 id='heading'>Congratulations</h1>
    <div classname='card'>
      <img
        classname='images'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 id='tittle'>Kiran V</h1>
      <p classname='description'>
        visnu institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        classname='images2'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
