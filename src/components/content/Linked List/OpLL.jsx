import React from "react";

const OpLL = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        Basic Operations in Linked List
      </h1>
      <p className="mb-4">
        A linked list is a dynamic data structure that can grow or shrink during
        runtime. In C programming, a linked list is implemented using pointers,
        which are used to connect the nodes in the list. Here are some basic
        operations that can be performed on linked lists:
      </p>
      <h2 className="text-2xl font-bold mb-4">Traversing a Linked List</h2>
      <p className="mb-4">
        To traverse a linked list, we start at the head node and follow the
        pointers to the next node until we reach the end of the list. This can
        be done using a while loop and a temporary pointer variable that points
        to the current node.
      </p>
      <h2 className="text-2xl font-bold mb-4">Inserting a Node</h2>
      <p className="mb-4">
        To insert a node into a linked list, we create a new node and connect it
        to the previous node using its pointer. We then update the pointer of
        the previous node to point to the new node, and update the pointer of
        the new node to point to the next node.
      </p>
      <h2 className="text-2xl font-bold mb-4">Deleting a Node</h2>
      <p className="mb-4">
        To delete a node from a linked list, we first find the node to be
        deleted and its previous node. We then update the pointer of the
        previous node to point to the next node, and free the memory allocated
        to the node to be deleted.
      </p>
      <h2 className="text-2xl font-bold mb-4">Reversing a Linked List</h2>
      <p className="mb-4">
        To reverse a linked list, we need to reverse the pointers of each node
        so that they point to the previous node instead of the next node. This
        can be done using three pointers - one to point to the current node, one
        to point to the previous node, and one to point to the next node.
      </p>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on linked lists, as well as different algorithms and their time
        complexities.
      </p>
    </div>
  );
};

export default OpLL;
