import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SetListPage() {
    const navigate = useNavigate();
    return <>
        <h1>Sets</h1>
        <Button onClick={() => {navigate('/sets/new')}} variant="primary" size="lg">
            Add new set
        </Button>
    </>
}
