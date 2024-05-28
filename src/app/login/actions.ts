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
      emailRedirectTo:"http://localhost:3000/",
    },
  })
  if (error) {
    console.log("log in error:")
    console.log(error)
    redirect('/error')
  }

  

 

} 




export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}


export async function signOut() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()
}
