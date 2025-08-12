import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      <h1>Mailbox List</h1>
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
  );
}

export default MailboxList