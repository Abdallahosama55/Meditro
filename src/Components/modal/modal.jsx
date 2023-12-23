import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600, // Adjust the width to your desired size
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const VideoModal = ({ open, videoUrl, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="video-modal-title">
      <Box sx={style}>
        <h2 id="video-modal-title">Video Modal</h2>
        <div>
          <video controls width="100%" height="auto">
            <source src={videoUrl} type="video/mp4" />
            {/* Add additional source elements for different video formats (e.g., WebM, Ogg) */}
          </video>
        </div>
      </Box>
    </Modal>
  );
};

export default VideoModal;
