<<<<<<< HEAD
import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";

//supabase connection
const supabase = createClient<Database>(
   import.meta.env.VITE_SUPABASE_UWIES_URL,
   import.meta.env.VITE_SUPABASE_UWIES_ANON_PUBLIC

);

export default supabase;
=======
import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase";

//supabase connection
const supabase = createClient<Database>(
   import.meta.env.VITE_SUPABASE_UWIES_URL,
   import.meta.env.VITE_SUPABASE_UWIES_ANON_PUBLIC

);

export default supabase;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
