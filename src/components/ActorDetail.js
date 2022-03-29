import React from "react";

function ContactDetails(props) {
  console.log(props);
  return (
    <tr>
      <td>
        <img
          className="img-fluid img-thumbnail celebImg"
          src={props.eachContact.pictureUrl}
          alt="celebrity"
        />
      </td>
      <td>{props.eachContact.name}</td>
      <td>{props.eachContact.popularity.toFixed(2)}</td>
      <td>
        {props.eachContact.wonOscar === true ? (
          <img
            src={
              "https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f3c6@2x.png"
            }
          />
        ) : null}
      </td>
      <td>
        {props.eachContact.wonEmmy === true ? (
          <img
            src={
              "https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f3c6@2x.png"
            }
          />
        ) : null}
      </td>
      <td>
        <button
          className="btn btn-secondary"
          onClick={() => props.deleteContact(props.eachContact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactDetails;
