import { useState } from "react";
import ModuleComponent from "./Component";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";
import { useModules } from "./hooks";
import { Link } from "react-router-dom";


export type DeleteModuleModal = {
    opened: boolean,
    module: any | null
};

export default function ModuleList() {
    const [delModal, setDelModal] = useState<DeleteModuleModal>({opened: false, module: null});
    const { modules, remove } = useModules();
    const openDeleteModal = (module: any) => setDelModal({opened: true, module});
    const closeDeleteModal = () => setDelModal({opened: false, module: null});
    const deleteModule = () => {
        remove(delModal.module.id);
        closeDeleteModal();
    }
    return (
        <>
            <div className="modules-list">
                <div className="list-group list-group-flush">
                    <div className="module-item list-group-item">
                        <div>
                            <h3>
                                <Link to="/sets">All sets</Link>
                            </h3>
                        </div>
                    </div>
                    {modules.map((module: any) => (
                        <ModuleComponent
                            key={module.id}
                            module={module}
                            setDelModal={openDeleteModal}
                        />
                    ))}
                </div>
            </div>
            <Modal show={delModal.opened} onHide={closeDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete module?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure that you want to delete "{delModal.module?.name}" module?</Modal.Body>
                <Modal.Footer>
                <Button variant="light" onClick={closeDeleteModal}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={deleteModule}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
