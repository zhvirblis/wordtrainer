import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moduleSelector, moduleActions } from "./slice";
import { StoreStatus } from "../indexDB/slice";
import Module from "./Item";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";


export type DeleteModuleModal = {
    opened: boolean,
    module: any | null
};

export default function ModuleList() {
    const dispatch = useDispatch();
    const [delModal, setDelModal] = useState<DeleteModuleModal>({opened: false, module: null});
    useEffect(() => {
        dispatch(moduleActions.get());
    }, []);
    const modules = useSelector(moduleSelector);
    const openDeleteModal = (module: any) => setDelModal({opened: true, module});
    const closeDeleteModal = () => setDelModal({opened: false, module: null});
    const deleteModule = () => {
        dispatch(moduleActions.delete(delModal.module.id));
        closeDeleteModal();
    }
    return (
        <>
            <div className="modules-list">
                {modules.status === StoreStatus.Loading && (
                    <div className="card-body message">Loading...</div>
                )}
                {modules.status === StoreStatus.Updating && (
                    <div className="card-body message">Updating...</div>
                )}
                {modules.status === StoreStatus.Done && (
                    <div className="list-group list-group-flush">
                        {modules.list.map((module: any) => (
                            <Module
                                key={module.id}
                                module={module}
                                setDelModal={openDeleteModal}
                            />
                        ))}
                    </div>
                )}
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
