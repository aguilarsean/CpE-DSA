import React from "react";

const IntroLL = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Introduction to Linked Lists</h1>
      <p className="mb-4">
        A linked list is a linear data structure in which elements are stored in
        nodes, and each node contains a value and a pointer to the next node in
        the list. Linked lists are commonly used in computer programming, and
        they are especially useful when the size of the data is unknown or
        changes frequently.
      </p>
      <p className="mb-4">
        In C programming, a linked list can be implemented using a structure
        that contains two fields: the data and a pointer to the next node. For
        example, the following code defines a simple linked list node:
      </p>
      <pre className="bg-gray-200 rounded-md p-2 mb-4">
        {`struct Node {
  int data;
  struct Node *next;
};`}
      </pre>
      <p className="mb-4">
        Linked lists in C are dynamic data structures, which means that nodes
        can be added or removed from the list at any time. To add a node to a
        linked list, we can create a new node and set its next pointer to point
        to the head of the list. To remove a node from a linked list, we can
        simply update the next pointer of the previous node to point to the node
        after the one we want to remove.
      </p>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on linked lists, such as insertion, deletion, traversal, and searching.
      </p>
    </div>
  );
};

export default IntroLL;
