import React from "react";

const CDLL = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">Circular Doubly Linked List</h1>
      <p className="mb-4">
        A circular doubly linked list is a dynamic data structure in which each
        node contains a data element, a pointer to the next node in the list,
        and a pointer to the previous node in the list. The first node's
        previous pointer points to the last node, and the last node's next
        pointer points to the first node, forming a circular structure. In C
        programming, a circular doubly linked list is implemented using
        pointers.
      </p>
      <h2 className="text-2xl font-bold mb-4">
        Advantages of Circular Doubly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Efficient insertion and deletion operations</li>
        <li>Memory efficient</li>
        <li>Traversal in both forward and backward directions is possible</li>
        <li>Can be used to implement circular buffers and queues</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Disadvantages of Circular Doubly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Requires more memory than a singly linked list</li>
        <li>Traversal can be more complex than in a linear linked list</li>
        <li>Cannot be used to implement stacks</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Basic Operations on Circular Doubly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversing the list in both forward and backward directions</li>
        <li>Inserting a node</li>
        <li>Deleting a node</li>
      </ul>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on circular doubly linked lists, as well as different algorithms and
        their time complexities.
      </p>
    </div>
  );
};

export default CDLL;
