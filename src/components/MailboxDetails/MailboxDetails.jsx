import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <div>
      <h1>Mailbox {selectedBox._id}</h1>
      <h3>Details</h3>
      <p>Owner: {selectedBox.boxOwner}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails