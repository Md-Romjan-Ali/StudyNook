import DisplayCard from "../DisplayCard";


const DetailsRoom =async ({params}) => {
    const {id}=await params
    const res=await fetch(`http://localhost:5000/studyrooms/${id}`)
    const room=await res.json()
    console.log(room);
    return (
        <div className="max-w-300 mx-auto pt-10">

          <div className="max-w-sm ">
             <DisplayCard room={room}/>
          </div>
        </div>
    );
};

export default DetailsRoom;