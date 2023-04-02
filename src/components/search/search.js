import "./search.css";
import searchicon from "../../images/searchicon.png";

function Search(){
    return(
        <div>
        <div className="search">
            <span className="location">
                <input type="text" placeholder="search the city...." className="searchbar"/>
                <button> 
                    <img src={searchicon} className="search-icon" alt="searchicon"/> 
                </button>
                <button> 
                    <img src={searchicon} className="search-icon" alt="searchicon"/> 
                </button>
            </span>
            <span className="temperature">
                <button className="button"> 
                    <p><sup>o</sup>C</p>
                </button>
                <button className="button"> 
                    <p><sup>o</sup>F</p>
                </button>
            </span>    
        </div>
        <div className="date">Tuesday,31 May 2022 | Local time: 02:54 PM</div>
        <div className="city"> Berlin, DE</div>
        <div className="clear"><button>clear</button></div>
        </div>   
    );
}

export default Search;