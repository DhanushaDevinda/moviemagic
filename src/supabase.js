import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ddztcehwnmjavsokqthd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkenRjZWh3bm1qYXZzb2txdGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NDI4OTUsImV4cCI6MjA0MzExODg5NX0.5weIxvOu7DjYLneaqIb_dhFSvOz9HHg2QQWMeVPo_aw";
export const supabase = createClient(supabaseUrl, supabaseKey);
