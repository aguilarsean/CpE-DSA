import React from "react";

const ImpLL = () => {
  return (
    <div className="container mx-auto p-4 h-screen overflow-x-hidden overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">
        Stack using linked list in C programming
      </h1>
      <div className="p-4 bg-gray-200 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Implementation</h2>
        <pre>
          {`struct Node {
  int data;
  struct Node* next;
};

struct Node* top = NULL;

void push(int x) {
  struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
  temp->data = x;
  temp->next = top;
  top = temp;
}

void pop() {
  if (top == NULL) return;
  struct Node* temp = top;
  top = top->next;
  free(temp);
}

int peek() {
  return top->data;
}

bool isEmpty() {
  return top == NULL;
}`}
        </pre>
      </div>
      <div className="p-4 bg-gray-200 rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Operations</h2>
        <ul className="list-disc ml-4">
          <li>push(x): Inserts element x at the top of the stack.</li>
          <li>pop(): Removes the element from the top of the stack.</li>
          <li>
            peek(): Returns the top element of the stack without removing it.
          </li>
          <li>
            isEmpty(): Returns true if the stack is empty, false otherwise.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImpLL;
