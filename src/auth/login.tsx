import supabase from "../utils/supabase";
import { useNavigate, Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email().min(3).max(255, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8).max(255, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const { email, password } = values;

    const { error } = await supabase().auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      navigate("/web");
    }
  };

  return (
    <div className="flex-1 flex flex-col px-8 w-full h-screen justify-center gap-2 bg-background text-text">
      <Link
        to="/"
        className="absolute left-8 top-8 py-2 px-4 group text-sm z-20 inline-flex items-center gap-2 border border-white/10 rounded-md bg-white/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <Card className="animate-animate-in flex flex-col w-full justify-center text-foreground mx-auto sm:max-w-sm border border-white/10 p-2 rounded-xl h-fit bg-white/5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>To continue to Flowspace</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(signIn)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@example.com"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full flex justify-between">
                Login{" "}
                <SyncLoader
                  loading={loading}
                  size={8}
                  color="currentColor"
                  aria-label="Loading Spinner"
                />
              </Button>
            </form>
          </Form>
        </CardContent>
        {error && <p className="mx-auto text-red-500">{error}</p>}
      </Card>
    </div>
  );
}
