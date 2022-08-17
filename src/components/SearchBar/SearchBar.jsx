import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';
import style from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    imageName: '',
  };
  hendleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  hanedleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      alert('Input image name');
      return;
    }

    this.props.onSubmit(this.state.imageName);

    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={this.hanedleSubmit}>
          <button type="submit" className={style.button}>
            <ImSearch />
          </button>

          <input
            className={style.input}
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
