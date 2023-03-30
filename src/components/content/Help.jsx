import React from "react";

const Help = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">Help Page</h1>
      <p className="mb-4">
        If you need help with our website, please refer to the following
        resources:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>FAQs:</strong> Check our frequently asked questions page to
          see if your question has already been answered.
        </li>
        <li>
          <strong>Support:</strong> If you need further assistance, please
          contact our support team at support@website.com.
        </li>
        <li>
          <strong>Feedback:</strong> If you have any feedback or suggestions for
          improving our website, please send them to feedback@website.com.
        </li>
      </ul>
      <p className="mb-4">
        We are committed to providing the best possible experience for our
        users, and we appreciate your feedback and suggestions for improvement.
      </p>
    </div>
  );
};

export default Help;
