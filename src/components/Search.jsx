import React from 'react';
import './styles/search.scss';
function Search(props) {
  const { onChangeHandle } = props;

  return (
    <section className="main">
      <input
        type="text"
        className="input"
        placeholder="Search character..."
        onChange={(event) => {
          onChangeHandle(event);
        }}
      />
    </section>
  );
}

export default Search;
