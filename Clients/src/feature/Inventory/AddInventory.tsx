import Button from '../../Components/UI/Button/Button';
import Modal from '../../Components/UI/Modal';




export default function AddInventory() {
  return (
    <div>
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new inventory item</Button>
      </Modal.Open>
    </Modal>
    </div>
  );
}