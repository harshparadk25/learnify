import { useState } from "react";
import { useAuth } from "../context/Auth";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="w-[380px] shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-indigo-600">
              Welcome Back 🎓
            </CardTitle>
            <p className="text-center text-sm text-slate-500">
              Login to continue your learning
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Login
              </Button>
            </form>
            <p className="text-center text-sm text-slate-500 mt-4">
              Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
