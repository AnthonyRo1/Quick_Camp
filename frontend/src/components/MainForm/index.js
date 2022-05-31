// this form makes a query to your database to find campsites with the following criteria:
// how many children
// how many adults 
// pets allowed? 
const MainForm = () => {
  return (
    <div>
      <form>
        <input type="text" name="where-to"></input>
        <input type="date" name="where-to-date"></input>
        <div className="wt-dropdown">
          <div id='dd-container'>
            <div id='dd-adults'></div>
            <div id='dd-children'></div>
            <div ud='dd-pets'></div>
          </div>
        </div>
      </form>
    </div>
  )
}