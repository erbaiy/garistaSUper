import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"; // Import the cn function
import { AuthContext } from "../context/Context"; // Import AuthContext
import SpinnerIcon from "@/components/icons";

function Login({ className }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("johndoe2@example.com");
  const [password, setPassword] = useState("securePassword1234");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [authState, setAuthState] = useContext(AuthContext); // Use AuthContext

  useEffect(() => {
    // Check if the user is already authenticated
    if (authState.isAuthenticated) {
      navigate("/Dashboard");
    }
  }, [authState, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      setAuthState({ isAuthenticated: true }); // Update auth state
      setIsLoading(false);
      console.log(token);
      navigate("/Dashboard");
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        console.error("Error response:", error.response.data);
        setError(error.response.data.message || "Login failed");
      } else if (error.request) {
        console.error("Error request:", error.request);
        setError("No response from server");
      } else {
        console.error("Error message:", error.message);
        setError("An error occurred");
      }
    }
  };

  return (
    <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div>
            <h1 className="text-4xl font-bold">
              gar<span className="text-blue-700">i</span>sta
            </h1>
          </div>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8 pt-44">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email & password
            </p>
          </div>
          <div className={cn("grid gap-6", className)}>
            {!authState.isAuthenticated && (
              <form onSubmit={handleLogin}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-4 relative">
                    <Input
                      id="password"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                      disabled={isLoading}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          fill="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          {/* SVG for showing the password */}
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          fill="currentColor"
                          className="bi bi-eye-slash "
                          viewBox="0 0 16 16"
                        >
                          {/* SVG for hiding the password */}
                        </svg>
                      )}
                    </button>
                  </div>

                  {error && <div className="text-red-500 text-sm">{error}</div>}

                  <Button disabled={isLoading}>
                    {isLoading ? (
                      <SpinnerIcon
                        size={32}
                        color="white"
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
