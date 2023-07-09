import React from 'react';

const CourseItem = (props) => {

    const handleOpenModal = () => {
        props.setModalShow(true);
        props.setId(props.id);
        props.setTitle(props.title);
        props.setImage(props.image);
        props.setDescription(props.description);
    }

    return (
        <div
            className="my-3"
            style={{ width: '250px' }}
        >
            <div>
                <img src={props.image}
                    className="object-fit-cover rounded"
                    style={{
                        height: '160px',
                        width: '100%'
                    }}
                    alt="course"
                />
            </div>
            <div className="my-1">
                <p className="fs-5 mb-2">{props.title}</p>
                <div className="progress mb-3 mx-auto position-relative" style={{ width: '85%' }}>
                    <div 
                        className="progress-bar"
                        role="progressbar" 
                        style={{ width: `${props.process}%`, backgroundColor: '#61E686', color: '#000000' }} 
                        aria-valuenow={props.process} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                    >
                    </div>
                    <small 
                        className="justify-content-center align-items-center h-100 d-flex position-absolute w-100" 
                        style={{ fontSize: '0.85rem' }}
                    >
                        {props.process}%
                    </small>
                </div>
                <p>
                    テスト点数:&nbsp;
                    <span
                        className="py-1 px-2 rounded"
                        style={{ backgroundColor: props.score >= 70 * 0.6 ? '#20E757' : '#F54646' }}
                    >
                        {props.score}/70
                    </span>
                </p>
                <button
                    type="button"
                    className="py-2 px-3 rounded border-0"
                    style={{ backgroundColor: '#D9D9D9' }}
                    onClick={() => handleOpenModal()}
                >
                    勉強する
                </button>
            </div>
        </div>
    )
}

export default CourseItem