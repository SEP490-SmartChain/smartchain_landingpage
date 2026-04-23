"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Factory } from "lucide-react";
import { apiClient } from "@/services/apiClient";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiClient.post<{ success: boolean; user: any; token: string }>("/auth/login", formData);
      
      if (data.success) {
        // Token is also set in HttpOnly cookie by the server
        // But we could store token in localStorage if needed for external API calls
        if (typeof window !== "undefined") {
          localStorage.setItem("admin_token", data.token);
        }
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#fcfcfd]">
      <div className="flex-1 bg-gradient-to-br from-blue-900 to-blue-700 relative hidden md:block overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_40px)]">
        {/* Placeholder for left background graphic */}
      </div>

      <div className="flex-1 flex items-center justify-center relative bg-[#fffafb]">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="w-full max-w-[460px] p-8 z-10 flex flex-col items-center">
          <div className="mb-8 flex justify-center w-full">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 rounded-[10px] flex items-center justify-center shadow-[0_4px_10px_rgba(29,78,216,0.25)]">
                  <Factory className="text-white" size={26} strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[1.75rem] font-extrabold text-gray-900 leading-[1.1] tracking-[-0.02em] m-0">PMS</span>
                <span className="text-[0.8125rem] text-gray-500 font-medium mt-[2px]">Production Management System</span>
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05),0_0_1px_rgba(0,0,0,0.1)] p-10">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 m-0">Đăng nhập</h2>

            {error && (
              <div className="mb-5 py-3 px-4 bg-red-50 border border-red-400 text-red-700 text-sm rounded-md text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col" autoComplete="off">
              <input type="text" style={{ display: "none" }} name="fake_user" />
              <input type="password" style={{ display: "none" }} name="fake_pass" />

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-semibold text-gray-700">
                  Tên đăng nhập <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-sm transition-all duration-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                    placeholder="Nhập tên đăng nhập"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <label className="text-sm font-semibold text-gray-700">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-sm transition-all duration-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="absolute right-4 bg-transparent border-none text-gray-400 cursor-pointer p-0 flex items-center justify-center transition-colors duration-200 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                <div className="flex justify-end mt-2">
                  <button type="button" className="text-sm text-blue-700 bg-transparent border-none cursor-pointer p-0 font-semibold hover:underline">
                    Quên mật khẩu?
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-6 mt-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded border border-gray-300 cursor-pointer accent-blue-700" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer font-medium">
                  Lưu thông tin đăng nhập
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full py-3.5 px-4 bg-blue-700 text-white font-semibold rounded-md border-none cursor-pointer transition-colors duration-200 text-sm hover:not(:disabled):bg-blue-800",
                  loading && "opacity-70 cursor-not-allowed"
                )}
              >
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
