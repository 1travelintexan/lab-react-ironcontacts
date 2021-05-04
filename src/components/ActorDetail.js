import React from "react";

//destructoring in the parameter
function ContactDetail({ contact, onDelete }) {
  const { pictureUrl, name, popularity, id } = contact;
  console.log(name);
  return (
    <div>
      <img src={pictureUrl} height="50px" />
      <h1>{name}</h1>
      <h2>{popularity}</h2>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default ContactDetail;
