import "@styles/Testing.css";
import HContact from "@components/HContact";
import Modal from "@components/ui/Modal/Modal";
import ServiceReqForm from "@components/ui/Forms/ServiceReq";

function Testing() {
  return (
    <div className="Testing-Container">
      <HContact />
      <Modal header="Submit Service Request" isOpen={true} onClose={() => {}}>
        <ServiceReqForm />
      </Modal>
    </div>
  );
}

export default Testing;
