import React from "react";

const DLL = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">Doubly Linked List</h1>
      <p className="mb-4">
        A doubly linked list is a dynamic data structure in which each node
        contains a data element and two pointers, one to the previous node in
        the list and one to the next node in the list. The first node is called
        the head node, and the last node is called the tail node. In C
        programming, a doubly linked list is implemented using pointers.
      </p>
      <h2 className="text-2xl font-bold mb-4">
        Advantages of Doubly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Allows traversal in both directions</li>
        <li>Efficient insertion and deletion operations</li>
        <li>Memory efficient</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Disadvantages of Doubly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Extra memory is required to store the previous pointers</li>
        <li>More complex to implement than singly linked list</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        Basic Operations on Doubly Linked List
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversing the list</li>
        <li>Inserting a node</li>
        <li>Deleting a node</li>
        <li>Reversing the list</li>
      </ul>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on doubly linked lists, as well as different algorithms and their time
        complexities.
      </p>
    </div>
  );
};

export default DLL;
