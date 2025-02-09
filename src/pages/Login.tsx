
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, allow any login
    toast({
      title: "Login successful",
      description: "Welcome to StudyHub!",
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-[#1A1F2C]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">StudyHub</h1>
          
          {/* Students Icon */}
          <img 
            src="/lovable-uploads/ef6058fe-1d26-40f2-afc6-afa97078d19e.png" 
            alt="Students" 
            className="w-32 h-32 object-contain mb-4"
          />
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl p-8">
          {/* Tabs */}
          <div className="flex gap-8 mb-6">
            <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Log In
            </button>
            <button className="text-gray-400 font-medium">
              Registro
            </button>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Bem vindo ao StudyHub
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6"
            >
              Log In
            </Button>
            <div className="text-center">
              <a href="#" className="text-purple-500 text-sm">
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
