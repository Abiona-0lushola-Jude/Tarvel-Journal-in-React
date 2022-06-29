import data from "./data";
import Card from "./Card";
import Header from "./Header";

function App() {
   const trips = data.map((item,index) =>{
    return(
            <Card 
                key = {index}
                {...item}
                />
    )
   })
  return (
        <div className="main--container">
          <Header />
          {trips}
        </div>
  );
}
export default App;
