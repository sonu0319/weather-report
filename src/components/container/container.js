import "./container.css";
import Header from "../header/header";
import Search from "../search/search";


function Container(){
    return(
        <div className="wrapperout">
            
                <Header/>
                <Search/>
            
        </div>
    );
}

export default Container;