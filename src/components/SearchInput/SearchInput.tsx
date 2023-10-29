import { Component, ReactNode } from 'react';
import search from '../../assets/search-icon.svg';
import styles from './SearchInput.module.scss';
import { SearchInputProps } from '../../types';

class SearchInput extends Component<SearchInputProps> {
  state = {
    value: '',
  };

  handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value,
    });
  };
  render(): ReactNode {
    return (
      <div>
        <h1 className={styles.title}>Start search your Star Wars Hero!</h1>
        <form
          className={styles['search-bar']}
          action=""
          onSubmit={(e) => {
            e.preventDefault(),
              this.props.changeLoading(),
              this.props.request(this.state.value).then(() => this.props.changeState());
          }}
        >
          <button className={styles['search-btn']} type="submit">
            <img src={search} alt="search-icon" />
          </button>
          <input
            className={styles.input}
            type="search"
            placeholder="Поиск"
            onChange={this.handleValueChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchInput;
