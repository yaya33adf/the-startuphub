import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ppwmgvqqgzgzdoifzpwm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwd21ndnFxZ3pnemRvaWZ6cHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MTgwNDEsImV4cCI6MjA1MjE5NDA0MX0.DAwQUF7xDhGtqhvIxsOJsHJc81kiEPISAS5OOGpfSbU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)