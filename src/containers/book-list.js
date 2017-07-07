import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

//glue between react and redux
function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

//anything returned ends up as props on BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called result passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote BookList from Component to container ---> needs to know about selectBook and make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
