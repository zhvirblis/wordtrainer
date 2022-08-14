import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#54910b" }}
        >
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Word trainer
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/" className="nav-link" aria-current="page">
                            Home
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
