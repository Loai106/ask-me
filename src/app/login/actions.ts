'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server';
import { stringify } from 'querystring';

export async function login(formData: FormData) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo:"http://localhost:3000",
    },
  })
  if (error) {
    
    redirect('/error')
  }

  return;
  

 

} 





export async function signOut() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()
}
