import Button from '../../Components/UI/Button/Button';
import Modal from '../../Components/UI/Modal';




export default function AddProduct() {
  return (
    <div>
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new product</Button>
      </Modal.Open>
    </Modal>
    </div>
  );
}