import React, { useContext, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { supaClient } from "../../services/supabase";
import "./Login.css";

export default function Login() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Navigate back to home page.
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!user) {
    return (
      <div className="auth-ui">
        <Auth supabaseClient={supaClient} providers={["google", "facebook"]} />
      </div>
    );
  } else {
    return <div>Logged in!</div>;
  }
}
