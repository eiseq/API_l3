import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './assets/styles.css'

const UserComments = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    }, [id]);

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className="title">Comments for User {id}</h1>
            <ul className="list">
                {comments.map(comment => (
                    <li className="list-item" key={comment.id}>
                        <p className="comment">{comment.body}</p>
                    </li>
                ))}
            </ul>
            <button className="back-button" onClick={handleBack}>Back to Users List</button>
        </div>
    );
};

export default UserComments;