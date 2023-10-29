import { Component, ReactNode } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './HomePage.module.scss';
import Presentation from '../../components/PresentationSection/Presentation';
import { getSomething } from '../../services/getSomething';
import HomePageState from '../../types';
import Spinner from '../../components/Spiner/Spiner';

localStorage.setItem('lastReq', '[1]');
class HomePage extends Component {
  local = JSON.parse(localStorage.getItem('lastReq') as string)[0];
  state: HomePageState = {
    name: this.local?.name,
    height: this.local?.height,
    mass: this.local?.mass,
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: false,
    });
  }
  handleChangeState = () => {
    this.local = JSON.parse(localStorage.getItem('lastReq') as string)[0];
    this.setState({
      name: this.local?.name,
      height: this.local?.height,
      mass: this.local?.mass,
      loading: false,
    });
  };
  handleChangeLoading = () => {
    this.setState({
      loading: true,
    });
  };
  render(): ReactNode {
    return (
      <div className={styles.content}>
        <div className={styles['header-content']}>
          <SearchInput
            request={getSomething}
            changeState={this.handleChangeState}
            changeLoading={this.handleChangeLoading}
          />
        </div>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className={styles['bottom-content']}>
            <Presentation
              name={this.state.name}
              height={this.state.height}
              mass={this.state.mass}
            />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
