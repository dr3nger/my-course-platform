// app/components/MuxPlayer.js
'use client'; // هذا السطر مهم ليتم تشغيل المكون في المتصفح

import MuxPlayer from '@mux/mux-player-react';

const VideoPlayer = ({ playbackId }) => {
    if (!playbackId) {
        return <p>Video not available.</p>;
    }

    return (
        <MuxPlayer
            streamType="on-demand"
            playbackId={playbackId}
            metadata={{
                video_id: 'video-id-123',
                video_title: 'My Awesome Course Lesson',
                viewer_user_id: 'user-id-abc',
            }}
        />
    );
};

export default VideoPlayer;