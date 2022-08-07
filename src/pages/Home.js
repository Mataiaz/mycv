import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import CommentDetails from '../components/CommentDetails';
import CommentForm from '../components/CommentForm';
import { useCommentsContext } from '../hooks/useCommentsContext'
import { useAuthContext } from '../hooks/useAuthContext';

function Home() {
  const {comments, dispatch} = useCommentsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('/api/comments', {
        headers: {
          'Authorization': `Bearer ${user.toke}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_COMMENTS', payload: json })
      }
    }
    if(user) {
      fetchComments()
    }
  }, [dispatch, user])
  return (
    <>
      <HeroSection />
      <Cards />
      <div className='home'>
        <div className='comments'>
          {comments && comments.map(comment => (
            <CommentDetails key={comment._id} comment={comment} />
          ))}
        </div>
        <CommentForm />
      </div>

      <Footer />
    </>
  );
}

export default Home;