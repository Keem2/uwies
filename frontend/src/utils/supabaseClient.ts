import { createClient } from "@supabase/supabase-js";

//supabase connection
const supabase = createClient(
   import.meta.env.VITE_SUPABASE_UWIES_URL,
   import.meta.env.VITE_SUPABASE_UWIES_ANON_PUBLIC

);

export default supabase;
