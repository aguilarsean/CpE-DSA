import React from "react";

const OpArray = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Basic Operations in Arrays</h1>
      <p className="mb-4">
        An array is a collection of elements of the same data type that are
        stored together in memory. In C programming, arrays are widely used for
        storing and manipulating data. Here are some basic operations that can
        be performed on arrays:
      </p>
      <h2 className="text-2xl font-bold mb-4">Accessing Elements</h2>
      <p className="mb-4">
        Elements in an array can be accessed using their index, which starts at
        0. For example, if we have an array `arr` of size 5, we can access the
        first element using `arr[0]`, the second element using `arr[1]`, and so
        on.
      </p>
      <h2 className="text-2xl font-bold mb-4">Inserting Elements</h2>
      <p className="mb-4">
        To insert an element into an array, we need to shift all the elements to
        the right of the insertion point one position to the right. We then
        assign the new element to the position where we want to insert it. If
        the array is already full, we need to allocate more memory to the array
        before we can insert a new element.
      </p>
      <h2 className="text-2xl font-bold mb-4">Deleting Elements</h2>
      <p className="mb-4">
        To delete an element from an array, we need to shift all the elements to
        the right of the deletion point one position to the left. We then
        decrement the size of the array by one. If we want to delete the first
        element of the array, we can simply shift all the elements one position
        to the left and decrement the size of the array by one.
      </p>
      <h2 className="text-2xl font-bold mb-4">Sorting Elements</h2>
      <p className="mb-4">
        Sorting an array involves arranging the elements in a specific order,
        such as ascending or descending order. There are various sorting
        algorithms that can be used to sort an array, such as bubble sort,
        selection sort, and insertion sort. The efficiency of a sorting
        algorithm depends on the size of the array and the distribution of the
        data.
      </p>
      <p className="mb-4">
        In this course, we will explore various operations that can be performed
        on arrays, as well as different sorting algorithms and their time
        complexities.
      </p>
    </div>
  );
};

export default OpArray;
