
import PostList from '@/components/posts/PostList'
import React from 'react'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'



const checkUserLoggedIn = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error getting session:', error);
    redirect('/login');
  }

  if (data.session) {
    console.log('User is logged in:', data.session.user);
    return data.session.user;
  } else {
    console.log('No user is logged in');
    redirect('/login');
  }
};






const page = async ()=>{

  const isLogged = checkUserLoggedIn();
  if (!isLogged) {
    console.log('home page error')
    redirect('/login')
  }

  return (
    <div className='my-4 flex justify-center  px-4'>
        <div className='w-full max-w-screen-md'>
          <div className='flex flex-col'>
          <PostList/>
          </div>
       </div>
     </div>
  
       
  )
}
  

export default page;