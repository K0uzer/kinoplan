'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'
import { PATH } from '@app/constants'

export async function login(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect(PATH.ERROR)
    }

    revalidatePath(PATH.MAIN, 'layout')
    redirect(PATH.MAIN)
}

export async function signup(formData: FormData) {
    const supabase = createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect(PATH.ERROR)
    }

    revalidatePath(PATH.MAIN, 'layout')
    redirect(PATH.MAIN)
}
