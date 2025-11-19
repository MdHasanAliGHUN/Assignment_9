import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState("Hasan");
  // Register a new user
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("User created successfully!");
      return userCredential;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!");
      } else {
        toast.error("Failed to create user!");
      }
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) return;
    try {
      setLoading(true);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      // Update user state
      setUser({ ...auth.currentUser, displayName: name, photoURL: photoURL });
    } catch (error) {
      toast.error("Failed to update profile!");
      console.error("Update profile error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Login a user with email and password
  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Logged in successfully!");
      return userCredential;
    } catch {
      toast.error("Login failed!");
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logOutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      toast.success("User Logout successfully!");
    } catch (error) {
      toast.error("Faild to logout!");
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  //Login with google
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google!");
      console.log(result.user);
      return result;
    } catch (error) {
      toast.error("Google login failed!");
      console.error("Error signing in with Google:", error);
    } finally {
      setLoading(false);
    }
  };

  //Forget Password
  const forGetPassword = async (email) => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error("Failed to send reset email!");
      console.error("Error sending reset email:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userValues = {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    loginUser,
    logOutUser,
    signInWithGoogle,
    forGetPassword,
  };
  return (
    <AuthContext.Provider value={userValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
