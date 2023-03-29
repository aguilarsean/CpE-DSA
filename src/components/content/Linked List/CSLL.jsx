import React from "react";

const CSLL = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Circular Singly Linked List</h1>
      <p className="mb-4">
        A circular singly linked list is a dynamic data structure in which each
        node contains a data element and a pointer to the next node in the list.
        The last node in the list points back to the first node, forming a
        circular structure. In C programming, a circular singly linked list is
        implemented using pointers.
      </p>
      <h2 className="text-2xl font-bold mb-4">
        Advantages of Circular Singly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Efficient insertion and deletion operations</li>
        <li>Memory efficient</li>
        <li>Can be used to implement circular buffers and queues</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Disadvantages of Circular Singly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversal can be more complex than in a linear linked list</li>
        <li>Cannot be used to implement stacks</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Basic Operations on Circular Singly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversing the list</li>
        <li>Inserting a node</li>
        <li>Deleting a node</li>
      </ul>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on circular singly linked lists, as well as different algorithms and
        their time complexities.
      </p>
    </div>
  );
};

export default CSLL;
