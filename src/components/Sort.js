import React from 'react';

// Compare function needed by the Sort component
const compare =(a, b) => {
    // you can access the relevant property like this a.props[by]
    // depending whether you are sorting by tilte or year, you can write a compare function here, 
    return (a.rating > b.rating) ? 1 : -1
  }

const Sort = ({children, by})=> {
    if (!by) {
        // If no 'sort by property' provided, return original list
        return children
    } else {
        return React.Children.toArray(children).sort(compare)
    }
}

export default Sort;