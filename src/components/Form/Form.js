import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        title:'',
        message:'', 
        tags:'', 
    });
    
    const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id == currentId): null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(()=>{
       if(post) setPostData(post);
    },[post])

    const handleSubmit = (e) => {
       e.preventDefault();
     
       if(currentId == 0){
        dispatch(createPost({...postData, name: user?.result?.name}));
        clear();
       }else{
        dispatch(updatePost(currentId, {...postData, name: user?.result?.name})); 
        clear();
       } 
    };

    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your reviews.
                </Typography>
            </Paper>
        )
    };

    const clear = () => {
        setCurrentId(0);
        setPostData({
        title:'',
        message:'', 
        tags:'', })
    }

    return (
        <Paper className={classes.paper}>
           <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } a feedback</Typography>

            <TextField 
                name="title" 
                variant="outlined"
                label="title" 
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({...postData, title: e.target.value})}
            />
            <TextField 
                name="message" 
                variant="outlined"
                label="message" 
                fullWidth
                value={postData.message}
                onChange={(e) => setPostData({...postData, message: e.target.value})}
            />
            <TextField 
                name="tags" 
                variant="outlined"
                label="tags" 
                fullWidth
                value={postData.tags}
                onChange={(e) => setPostData({...postData, tags: e.target.value})}
            />

               <Button 
                 className={classes.buttonSubmit}
                 variant="contained" 
                 color="primary"
                 size="large" 
                 type="submit" 
                 fullWidth>Submit
                </Button>

                <Button 
                 variant="contained" 
                 color="secondary" 
                 size="small" 
                 onClick={clear} 
                 fullWidth>Clear
                </Button>

           </form>
        </Paper>
    );
}

export default Form;