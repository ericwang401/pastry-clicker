import { createClient } from '@supabase/supabase-js'

const supabase = createClient('http://172.99.233.101/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UiLAogICAgImlhdCI6IDE2NTI4NTAwMDAsCiAgICAiZXhwIjogMTgxMDYxNjQwMAp9.6GNJRC-szLucHlBZnEAc13zK6mmhEq2cAXo9eZLH85I')

export default supabase