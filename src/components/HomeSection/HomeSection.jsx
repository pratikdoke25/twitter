import { Avatar,Button } from '@mui/material';
import virat from '../../assets/images/virat.jpeg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useState } from 'react';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
});

const HomeSection = () => {
    const [uploadingImage, setUploadingImage] = useState(false);
    const [seleteImage, setSeleteImage] = useState("");
    const handleSubmit = (values) => {
        console.log("values", values);
    };

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSeleteImage(imgUrl);
        setUploadingImage(false);
    };

    return (
        <div className="space-y-5">
            <section>
                <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
            </section>
            <section className="pb-10">
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
                                    <FmdGoodIcon className='text-[#1d9bf0]'/>
                                    <TagFacesIcon className='text-[#1d9bf0]'/>
                                </div>
                                <div>
                                    <Button sx={{
                                        width:"100%",
                                        borderRadius: "20px",
                                        py:"8px",
                                        px:"20px",
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
            <TweetCard/>
        </div>
    );
};

export default HomeSection;
