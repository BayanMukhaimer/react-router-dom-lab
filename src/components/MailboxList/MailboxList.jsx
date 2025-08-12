import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
  <h1>Mailbox List</h1>
    <div className="mailbox-list">
      
      {mailboxes.map((mailbox) => (
        <Link
          key={mailbox._id}
          to={`/mailboxes/${mailbox._id}`}
          className="mail-box"
        >
          <h4>Mailbox{mailbox._id}</h4>
        </Link>
      ))}
    </div>
    </>
  );
}

export default MailboxList