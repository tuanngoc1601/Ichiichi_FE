import React, { useRef, useEffect, useState } from 'react';
import { courseService } from '../../service';

const VideoPlayer = (props) => {
    const videoRef = useRef(null);
    const [watchedTime, setWatchedTime] = useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleTimeUpdate = async () => {
            const currentTime = videoElement.currentTime;
            const duration = videoElement.duration;
            setWatchedTime(videoElement.currentTime);

            if (currentTime >= duration * 0.8 && !props.watched) {
                props.setWatched(true);
                let data = {
                    user_id: 1,
                    course_id: parseInt(props.course_id),
                    content_id: parseInt(props.content_id),
                    detail_id: props.detail_id
                };
                const response = await courseService.createVideoWatchedSerivce(data);
                console.log(response.data);
                const res = await courseService.updateProgressCourseService(parseInt(props.course_id));
                console.log(res.data);
            }
        };

        videoElement.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [props.watched]);

    return (
        <div>
            <video
                ref={videoRef}
                src={props.link}
                width="100%"
                height="290"
                controls="controls"
            />
        </div>
    );
};

export default VideoPlayer;
