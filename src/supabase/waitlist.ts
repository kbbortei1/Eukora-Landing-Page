import { supabase } from './config';

export interface WaitlistEntry {
  email: string;
  name?: string;
  message?: string;
  source: 'hero' | 'cta';
}

// Add new entry to waitlist
export const addToWaitlist = async (entry: WaitlistEntry): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(entry.email)) {
      return { success: false, message: "Please enter a valid email address." };
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', entry.email.toLowerCase())
      .single();

    if (existing) {
      return { success: false, message: "This email is already on our waitlist!" };
    }

    // Add to Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: entry.email.toLowerCase(),
          name: entry.name || null,
          message: entry.message || null,
          source: entry.source,
        }
      ]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, message: "Something went wrong. Please try again." };
    }

    return { success: true, message: "You've been added to the waitlist! We'll be in touch soon." };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
};
