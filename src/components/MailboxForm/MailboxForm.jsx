import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addBox }) => {
  const [newMailbox, setNewMailbox] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setNewMailbox({
      ...newMailbox,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(newMailbox);
    setNewMailbox({ boxOwner: "", boxSize: "Small" });
    navigate("/mailboxes");
  };

  return (
    <div className="mailboxFormDiv">
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter a Boxholder:
            <br></br>
            <input
              name="boxOwner"
              value={newMailbox.boxOwner}
              onChange={handleInputChange}
              placeholder='Boxholder name'
              required
            />
          </label>
        </div>
            <br></br>
        <div>
          <label>
            Box Size:
            <br></br>
            <select
              name="boxSize"
              value={newMailbox.boxSize}
              onChange={handleInputChange}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
        </div>

        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
