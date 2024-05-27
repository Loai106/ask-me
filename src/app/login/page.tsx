import { Button ,Input} from '@nextui-org/react'
import { login } from './actions'
import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';



export default async function LoginPage() {

  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    
    redirect('/');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
  <div className="w-full max-w-screen-md">
    <div className="flex flex-col gap-10 justify-center items-center h-full mt-[-30%]">
      <h1 className="text-5xl font-bold text-center">AskMe</h1>
      <form action={login} className='flex flex-col gap-3'>
        <Input color='danger' name="email" type='email' placeholder='enter your email'  className=' '/>
        <Button color="danger" type='submit'>Sign in with Magic Link</Button>

      </form>
    </div>
  </div>
</div>

  )
}


