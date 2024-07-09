import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function UpdateForm({
  updateFormState,
  setUpdateFormState,
  userId,
  userData,
  fetchUsers,
  setError, // Receive setError as a prop
}) {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      setUserDetails({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        username: userData.username || "",
        password: "",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  async function handleUpdateUser() {
    if (!userDetails.first_name || !userDetails.last_name) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/restaurants-owners/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        const errorMessage = data?.errors
          ? data.errors
          : "Network response was not ok";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("User updated successfully:", data);
      toast.success("User updated successfully");
      setUpdateFormState(false);
      fetchUsers();
    } catch (error) {
      console.error("There was a problem updating the user:", error);
      toast.error("Failed to update user");
    }
  }
  return (
    <Dialog
      open={updateFormState}
      onOpenChange={setUpdateFormState}
      className="p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl"
    >
      <DialogContent className="max-w-[50rem]">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>Update the user details below</DialogDescription>
          <div className="flex flex-col gap-3 items-center justify-center pt-4">
            <div className="flex gap-3">
              <Input
                type="text"
                name="first_name"
                placeholder="First name"
                className="w-72 p-2 border border-gray-300 rounded-md"
                value={userDetails.first_name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="w-72 p-2 border border-gray-300 rounded-md"
                value={userDetails.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <Input
                type="text"
                name="email"
                placeholder="Email"
                className="w-72 p-2 border border-gray-300 rounded-md"
                value={userDetails.email}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-72 p-2 border border-gray-300 rounded-md"
                value={userDetails.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                className="w-72 p-2 border border-gray-300 rounded-md"
                value={userDetails.username}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="w-72 p-2 border border-gray-300 rounded-md"
                value={userDetails.password}
                onChange={handleChange}
              />
            </div>
            <DialogClose>
              <Button
                variant="outline"
                className="justify-end items-end bg-black text-white"
                onClick={handleUpdateUser}
              >
                Update User
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
