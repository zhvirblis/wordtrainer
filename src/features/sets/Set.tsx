import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Header from "../../common/page-parts/Header";

export default function SetList() {
    const navigate = useNavigate();
    return <>
        <Header />
        <div className="container">
            <h1>Sets</h1>
            <Button onClick={() => {navigate('/sets/new')}} variant="primary" size="lg">
                Add new set
            </Button>
        </div>
    </>
}
