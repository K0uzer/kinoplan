import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

const supabaseUrl = dotenv.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = dotenv.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
