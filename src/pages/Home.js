import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import CommentDetails from '../components/CommentDetails';
import CommentForm from '../components/CommentForm';

function Home() {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('/api/comments')
      const json = await response.json()

      if (response.ok) {
        setComments(json)
      }
    }

    fetchComments()
  }, [])

  return (
    <>
      <HeroSection />
      <Cards />
      <div className='home'>
        <div className='comments'>
          {comments && comments.map((comment) => (
            <CommentDetails comment={comment} key={comment._id} />
          ))}
        </div>
        <CommentForm />
      </div>

      <Footer />
    </>
  );
}

export default Home;