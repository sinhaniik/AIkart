import "../../tailwind.css"
import "./styles.css"
const Navbar = () => {
    return (
        <div className="nav flex flex-row">
            <h1 className="basis-1/2 h1 font-sans text-3xl font-bold">AiKart</h1>
            <div className="basis-1/2 my-4" >
                  <input className="input rounded" type="text" placeholder="Search any AI"/>
            </div>
        </div>
    )
};

export default Navbar