import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'

export default async function PrivatePage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <main>
            <h1>Private Page</h1>
            <p>Welcome, {data?.user.email}!</p>
            <button onClick={() => supabase.auth.signOut()}>Logout</button>
        </main>
    )
}
