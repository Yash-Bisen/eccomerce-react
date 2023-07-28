import './App.css';
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (
    <>
    <div className="App">
    <h1 className="text-center">Our Services</h1>
    </div>
    <div className="Container-fluid mb-5">
      <div className="row">
        <div classname="col-10 mx-auto">
          <div className="row gy-4">
          <div classname="col-4 mx-auto">
            {Sdata.map((val, indx)=>{
              return <Card key={indx} imgsrc={val.imgsrc} title={val.title}/>
            })}
            </div>
          </div> 
        </div>
      </div>
    </div>
    </>
  );
}

export default Service;
