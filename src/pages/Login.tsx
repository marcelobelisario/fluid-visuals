import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login successful",
      description: "Welcome to StudyHub!",
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141A2E] to-[#1A1F2C] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 mt-4">StudyHub</h1>
        </div>

        <div className="flex gap-8 justify-center mb-6">
          <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Log In</button>
          <button 
            className="text-gray-400 font-semibold hover:text-blue-600 transition" 
            
          >
            Registro
          </button>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">
          Bem-vindo ao StudyHub
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-xl shadow-md"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
