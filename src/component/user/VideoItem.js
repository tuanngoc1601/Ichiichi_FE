import React from 'react';
import VideoImage from '../../assets/video_image.png';

const VideoItem = (props) => {
    const handleOpenModalVideo = () => {
        props.setModalShow(true);
        props.setVideoModal(props.video);
    }

    const checkVideoWatched = () => {
        let videos = props.videoWatched;
        let arrDetailId = [];
        if(videos.length > 0) {
            videos.forEach(video => {
                arrDetailId.push(video.detail_id);
            })
        }
        if(arrDetailId.includes(props.video.id)) return true;
        return false;
    }

    return (
        <div style={{ width: '200px' }}>
            <div 
                role="button"
                onClick={() => handleOpenModalVideo()}
            >
                <img src={VideoImage}
                    className="object-fit-cover rounded border border-1 border-secondary"
                    style={{
                        height: '120px',
                        width: '100%'
                    }}
                    alt="course"
                />
            </div>
            <div className="mt-1">
                <p className="text-center">{checkVideoWatched() ? <i className="fas fa-circle text-success"></i> : <i className="far fa-circle"></i>}{props.video.title}</p>
            </div>
        </div>
    )
}

export default VideoItem