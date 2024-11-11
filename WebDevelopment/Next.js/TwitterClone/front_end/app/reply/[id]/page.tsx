'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSidebar } from '@/app/SidebarContext.tsx';

interface Reply {
  username: string;
  content: string;
  createdAt: string;
}

interface Post {
  _id: string;
  username: string;
  content: string;
  createdAt: string;
  replies: Reply[];
}

const ReplyPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [newReply, setNewReply] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const { sideBarName } = useSidebar();

  const { id } = params;

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; 
      try {
        const response = await axios.get(`http://localhost:3001/getSpecificPost/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log("Error fetching post:", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/addReply`, { postId: id, content: newReply, username: sideBarName });
      setStatus('Reply added successfully');
      setNewReply('');
      const updatedPost = await axios.get(`http://localhost:3001/getSpecificPost/${id}`);
      setPost(updatedPost.data);
    } catch (error) {
      console.log("Error adding reply:", error);
      setStatus('Error adding reply');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#121212] min-h-screen text-white">
      <div className="max-w-2xl w-full bg-[#1c1c1c] shadow-lg rounded-lg overflow-hidden">
        {post ? (
          <>
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold">{post.username}</h2>
              <p className="text-gray-300 mt-2">{post.content}</p>
              <small className="text-gray-500">{new Date(post.createdAt).toLocaleString()}</small>
            </div>

            <div className="p-6 border-b border-gray-700">
              <h3 className="text-lg font-semibold">Replies ({post.replies.length})</h3>
              {post.replies.length > 0 ? (
                post.replies.map((reply, index) => (
                  <div key={index} className="mt-4 bg-gray-800 p-4 rounded border border-gray-600">
                    <p className="font-semibold text-gray-200">{reply.username}</p>
                    <p className="text-gray-300 mt-1">{reply.content}</p>
                    <small className="text-gray-500">{new Date(reply.createdAt).toLocaleString()}</small>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 mt-2">No replies yet.</p>
              )}
            </div>

            <form onSubmit={handleReplySubmit} className="p-6">
              <textarea
                className="border border-gray-600 p-3 w-full h-24 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Type your reply here..."
                required
              ></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 transition">Add Reply</button>
            </form>
            {status && <p className="text-center text-green-400 mt-2">{status}</p>}
          </>
        ) : (
          <p className="text-gray-300">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ReplyPage;
