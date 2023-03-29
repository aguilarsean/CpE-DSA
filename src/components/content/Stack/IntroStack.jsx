import React from "react";

const IntroStack = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Introduction to Stack</h1>
      <p className="text-lg mb-4">
        A stack is a linear data structure in which elements are added and
        removed from the top of the stack. It follows the Last In First Out
        (LIFO) principle, which means that the last element added to the stack
        will be the first one to be removed.
      </p>
      <p className="text-lg mb-4">
        The operations performed on a stack are push (to insert an element at
        the top of the stack) and pop (to remove an element from the top of the
        stack). Other operations that can be performed on a stack include peek
        (to return the element at the top of the stack without removing it) and
        isEmpty (to check whether the stack is empty).
      </p>
      <p className="text-lg">
        Stacks can be implemented using arrays or linked lists. In the array
        implementation, a fixed-size array is used to hold the stack elements.
        In the linked list implementation, each node of the linked list
        represents an element of the stack.
      </p>
    </div>
  );
};

export default IntroStack;
