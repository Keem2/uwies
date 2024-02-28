import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";

//supabase connection
const supabase = createClient<Database>(
   import.meta.env.VITE_SUPABASE_UWIES_URL,
   import.meta.env.VITE_SUPABASE_UWIES_ANON_PUBLIC

);

export default supabase;
