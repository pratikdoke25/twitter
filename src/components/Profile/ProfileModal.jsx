import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik'; // Importing useFormik from formik library
import { IconButton, TextField, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import virat from '../../assets/images/virat.jpeg';
import './ProfileModal.css';
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

export default function ProfileModal({ open, handleClose }) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false);
    

    const handleSubmit = (values) => {
        console.log("handleSubmit",values);
    }

    const formik = useFormik({ // Using useFormik hook to initialize formik
        initialValues: {
            fullname: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            image: ""
        },
        onSubmit: handleSubmit
    })

    const handleImageChange = (event) => {
        setUploading(true);
        const { name } = event.target
        const file = event.target.files[0]
        formik.setFieldValue(name, file);
        setUploading(false);
    }

    return (
        <div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon />
                                </IconButton>
                                <p className=''>Edit Profile</p>
                            </div>
                            <Button type='submit'>Save</Button>
                        </div>
                        <div className='hidescrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
                            <React.Fragment>
                                <div className='w-full '>
                                    <div className='relative'>
                                        <img
                                            className='w-full h-[12rem] object-cover object-center'
                                            src="https://cdn.pixabay.com/photo/2023/03/20/20/35/sunset-7865844_640.jpg"
                                            alt=""
                                        />
                                        <input
                                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                            type="file"
                                            name='backgroundImage'
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                                <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                                    <div className='relative'>
                                        <Avatar sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                                            src={virat} />
                                        <input
                                            className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name="image"
                                            type="file" />
                                    </div>
                                </div>
                            </React.Fragment>
                            <div className='space-y-3'>
                                <TextField
                                    fullWidth
                                    id="fullname"
                                    name="fullname"
                                    label="Full Name"
                                    value={formik.values.fullname} // accessing values from formik
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                    helperText={formik.touched.fullname && formik.errors.fullname}
                                />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="bio"
                                    name="bio"
                                    label="Bio"
                                    value={formik.values.bio} // accessing values from formik
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />
                                <TextField
                                    fullWidth
                                    id="website"
                                    name="website"
                                    label="Website"
                                    value={formik.values.website} // accessing values from formik
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                                <TextField
                                    fullWidth
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={formik.values.location} // accessing values from formik
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                                <div className='my-3'>
                                    <p className='text-lg'>Birth date . Edit</p>
                                    <p className='text-2xl'>Feb 23, 2000</p>
                                </div>
                                <p className='py-3'>Edit Professional Profile</p>
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
