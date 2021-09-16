import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#54910b"}}>
            <div className="container">
                <a className="navbar-brand">Word trainer</a>
	
	    <button className="navbar-toggler"
		type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	    </button>
	    <div className="collapse navbar-collapse" id="navbarNav">
	    	<ul className="navbar-nav">
		    <li className="nav-item">
			<Link to="/about" className="nav-link" aria-current="page">About</Link>
		    </li>
		</ul>
	    </div>
            </div>
        </nav>
    )
}
