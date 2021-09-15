export default function Header() {
    return (
        <nav className="navbar navbar-dark" style={{backgroundColor: "#54910b"}}>
            <div className="container">
                <a className="navbar-brand">Word trainer</a>
	    <button className="navbar-toggler"
		type="button" data-bs-toggle="collapse" data-bs-target="#nacbarNav"
	    >
		<span className="navbar-toggler-icon"></span>
	    </button>
            </div>
        </nav>
    )
}
