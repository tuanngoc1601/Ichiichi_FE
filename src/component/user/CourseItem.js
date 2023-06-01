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
            className="my-4"
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
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleOpenModal()}
                >
                    詳細
                </button>
            </div>
        </div>
    )
}

export default CourseItem