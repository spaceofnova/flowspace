import supabase from "./supabase";

export default function logOut() {
  supabase().auth.signOut();
}
