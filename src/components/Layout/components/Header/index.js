import { useState } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import images from '~/assets/images'
import styles from './Header.module.scss'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'

const cx = classNames.bind(styles)

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);


  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy 
            interactive // tương tác được thẻ đang render
            visible={searchResult.length > 0} // điều kiện để hiện ra render
            render={attrs => (
              <PopperWrapper>
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  Ket qua
                </div>
              </PopperWrapper>
            )}
        >
          <div className={cx('search')}>

            <input placeholder='Search account and videos' spellCheck={false}/>

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>

        </div>
      </div>
    </header>
  )
}

export default Header