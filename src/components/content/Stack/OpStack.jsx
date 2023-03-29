import React from "react";

const OpStack = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Basic Operations in Stack</h1>
      <p className="text-lg mb-4">
        A stack is a linear data structure in which elements are added and
        removed from only one end, called the top. The operations that can be
        performed on a stack are:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Push: adds an element to the top of the stack</li>
        <li>Pop: removes the top element from the stack</li>
        <li>
          Peek: returns the top element without removing it from the stack
        </li>
      </ul>
      <p className="text-lg mb-4">
        The stack follows the Last In First Out (LIFO) principle, which means
        that the last element inserted into the stack is the first one to be
        removed.
      </p>
      <p className="text-lg mb-4">
        The implementation of a stack can be done using an array or a linked
        list data structure. However, in C programming, an array is preferred
        due to its simplicity and efficiency.
      </p>
      <p className="text-lg mb-4">
        Below are the basic operations that can be performed on a stack:
      </p>
      <div className="flex flex-row mb-4">
        <div className="flex-grow mr-4">
          <h2 className="text-xl font-bold mb-2">Push</h2>
          <p className="text-lg mb-2">
            Adds an element to the top of the stack.
          </p>
          <pre>
            <code className="language-c">
              {`
void push(int item) {
  if (top == MAX - 1) {
    printf("Stack overflow\\n");
  } else {
    top++;
    stack[top] = item;
  }
}`}
            </code>
          </pre>
        </div>
        <div className="flex-grow ml-4">
          <h2 className="text-xl font-bold mb-2">Pop</h2>
          <p className="text-lg mb-2">
            Removes the top element from the stack.
          </p>
          <pre>
            <code className="language-c">
              {`
void pop() {
  if (top == -1) {
    printf("Stack underflow\\n");
  } else {
    top--;
  }
}`}
            </code>
          </pre>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Peek</h2>
        <p className="text-lg mb-2">
          Returns the top element without removing it from the stack.
        </p>
        <pre>
          <code className="language-c">
            {`
int peek() {
  if (top == -1) {
    printf("Stack is empty\\n");
    return -1;
  } else {
    return stack[top];
  }
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default OpStack;
