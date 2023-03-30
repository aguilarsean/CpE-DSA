import React from "react";

const SLL = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">Singly Linked List</h1>
      <p className="mb-4">
        A singly linked list is a dynamic data structure in which each node
        contains a data element and a pointer to the next node in the list. The
        first node is called the head node, and the last node is called the tail
        node. In C programming, a singly linked list is implemented using
        pointers.
      </p>
      <h2 className="text-2xl font-bold mb-4">
        Advantages of Singly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Dynamic size</li>
        <li>Efficient insertion and deletion operations</li>
        <li>Memory efficient</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Disadvantages of Singly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversal is slow compared to arrays</li>
        <li>No direct access to the elements</li>
        <li>Extra memory is required to store the pointers</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Basic Operations on Singly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversing the list</li>
        <li>Inserting a node</li>
        <li>Deleting a node</li>
        <li>Reversing the list</li>
      </ul>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on singly linked lists, as well as different algorithms and their time
        complexities.
      </p>
    </div>
  );
};

export default SLL;
