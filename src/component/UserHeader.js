import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../assets/logo_app.png';
import { getSearchCourse } from '../redux/apiRequests';

const UserHeader = (props) => {
    const dispatch = useDispatch();

    const handleOnChangeSearch = (e) => {
        props.setSearchTerm(e.target.value);
    }

    const handleSubmitSearchCourse = () => {
        let data = { searchTerm: props.searchTerm };
        getSearchCourse(data, dispatch);
    }

    return (
        <div className="px-5 border border-1" style={{ height: '100px' }}>
            <div className="row d-flex align-items-center px-5">
                <div className="d-flex col-3 align-items-center justify-content-center">
                    <div
                        style={{
                            width: '50px',
                            backgroundImage: `url(${Logo})`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: '100px'
                        }}>
                    </div>
                    <span className="fw-bold fs-5 ms-4">ベトナム簡単語</span>
                </div>
                <div className="form-group col-5">
                    <input
                        type="text"
                        placeholder="コース検索"
                        className="form-control"
                        value={props.searchTerm}
                        onChange={(e) => handleOnChangeSearch(e)}
                    />
                </div>
                <div className="button-group d-flex justify-content-around col-2">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleSubmitSearchCourse()}
                    >
                        検索
                    </button>
                    <div className="dropdown me-2">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            復習
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {/* <li><a className="dropdown-item" href="#">間違い質問</a></li> */}
                            <li><Link to="/test-incorrect-question" className="dropdown-item">間違い質問</Link></li>
                            <li><Link to="/test-random" className="dropdown-item">質問を復習</Link></li>
                            {/* <li><a className="dropdown-item" href="#">質問を復習</a></li> */}
                        </ul>
                    </div>
                    {/* <button type="button" className="btn btn-primary ms-5">復習</button> */}
                </div>
                <div className="d-flex align-items-center justify-content-around col-2">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        style={{ width: '40px' }}
                        alt="Avatar"
                    />
                    <span className="fs-5">Rin</span>
                    <span><i className="fas fa-sort-down fs-3"></i></span>
                </div>
            </div>
        </div>
    )
}

export default UserHeader