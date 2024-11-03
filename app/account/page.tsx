import AccountForm from '../components/account/AccountForm'
import { createClient } from 'utils/supabase/server'

export default async function Account() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return <AccountForm user={user} />
}
