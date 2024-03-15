import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import virat from '../../assets/images/virat.jpeg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4
};

export default function ReplyModal({handleClose,open}) {
  
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const navigate = useNavigate();

 

  const handleSubmit = (values) => {
    console.log("handle submit", values);
    // Handle form submission
  };

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setUploadingImage(false);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4
    },
    onSubmit: handleSubmit
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex space-x-5'>
            <Avatar
              onClick={() => navigate(`/profile/${6}`)}
              alt="username"
              className='cursor-pointer'
              src={virat}
            />
             
            <div className='w-full'>
              <div className='flex justify-between items-center'>
                <div className='flex cursor-pointer items-center space-x-2'>
                  <span className='font-semibold'>
                    Pratik Doke
                  </span>
                  <span className='text-gray-600'>@pratikdoke  . 2m</span>
                  <VerifiedIcon className='text-[#1d9bf0]' />
                </div>
              </div>
              <div className='mt-2'>
                <div onClick={() => navigate(`/tweet/${8}`)} className='cursor-pointer' >
                  <p className='mb-2 p-0'>Hi, I am on Twitter. My name is Pratik.</p>
                </div>
                <section className={`py-10`}>
                <div className='flex space-x-5'>
                  <Avatar alt="username" src={virat} />
                  <div className='w-full'>
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name='content'
                          placeholder='What is happening'
                          className={`border-none outline-none text-xl bg-transparent`}
                          {...formik.getFieldProps("content")}
                        />
                        {formik.touched.content && formik.errors.content ? (
                          <div className="text-red-500 border-none bg-transparent outline-none text-xl">{formik.errors.content}</div>
                        ) : null}
                      </div>
                      <div className='flex justify-between items-center mt-5'>
                        <div className='flex space-x-5 items-center'>
                          <label htmlFor="imageFile" className='flex items-center space-x-2 rounded-md cursor-pointer'>
                            <ImageIcon className='text-[#1d9bf0]' />
                            <input type="file" id="imageFile" name='imageFile' className='hidden' onChange={handleSelectImage} />
                          </label>
                          {uploadingImage && <span>Uploading...</span>}
                          <FmdGoodIcon className='text-[#1d9bf0]' />
                          <TagFacesIcon className='text-[#1d9bf0]' />
                        </div>
                        <div>
                          <Button
                            sx={{
                              width: "100%",
                              borderRadius: "20px",
                              py: "8px",
                              px: "20px",
                              bgColor: "#1e88e5"
                            }}
                            variant='contained'
                            type="submit"
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
              </div>
             
             
            </div>
          
          </div>
        </Box>
      </Modal>
    </div>
  );
}
