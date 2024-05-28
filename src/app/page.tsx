
import PostList from '@/components/posts/PostList'
import React from 'react'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'









const page = async ()=>{

  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {


    
    redirect('/login');
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