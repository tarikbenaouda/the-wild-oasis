import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wnsecpambdxucnlmrllz.supabase.co";
// It's safe to expose this key, it's only do what I allow it to do in the Row Level Security
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Induc2VjcGFtYmR4dWNubG1ybGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2OTA5MTIsImV4cCI6MjA0ODI2NjkxMn0.EBqM8Uq16cB5SltCBKegzWz8Tz18AfLucOdeZ1Fa14Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
