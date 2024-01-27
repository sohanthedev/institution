
const Dashboard = () => {
  const data = [5,7,7,54,456,45]
    return (
      
<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
  {
    data.map((i)=> <div key={i} className="card w-full bg-base-100 shadow-xl dark:bg-slate-900 ">
  <div className="card-body">
    <h2 className="card-title">Present Students</h2>
    <p>0</p>
    <button className="btn btn-sm">Small</button>
  </div>
</div>)
  }
      
      

</div>
    );
};

export default Dashboard;