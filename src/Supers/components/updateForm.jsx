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
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    if (userData) {
      setUserDetails({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        password: "",
      });
    }
  }, [userData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    // Clear specific field error when user starts typing again
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };
  async function handleUpdateUser() {
    // Step 1: Define validation criteria
    const isValidName = (name) => /^[a-zA-Z ]{2,30}$/.test(name);

    // Step 2: Implement validation logic
    let valid = true;
    const errors = {};

    if (!userDetails.first_name || !isValidName(userDetails.first_name)) {
      errors.first_name = "Invalid first name.";
      valid = false;
    }

    if (!userDetails.last_name || !isValidName(userDetails.last_name)) {
      errors.last_name = "Invalid last name.";
      valid = false;
    }

    if (!valid) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/super-admin-staff/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to update user, server response:", errorData);
        toast.error("Failed to update user");
        return;
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
            <div className="flex flex-row gap-3 w-full">
              <div className="flex flex-col w-1/2">
                <Input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  className="p-2 border border-gray-300 rounded-md"
                  value={userDetails.first_name}
                  onChange={handleChange}
                />
                {formErrors.first_name && (
                  <span className="error text-red-500 mt-1">
                    {formErrors.first_name}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-1/2">
                <Input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  className="p-2 border border-gray-300 rounded-md"
                  value={userDetails.last_name}
                  onChange={handleChange}
                />
                {formErrors.last_name && (
                  <span className="error text-red-500 mt-1">
                    {formErrors.last_name}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-3 w-full">
              <div className="flex flex-col w-1/2">
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-2 border border-gray-300 rounded-md"
                  value={userDetails.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className="error text-red-500 mt-1">
                    {formErrors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-1/2">
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="p-2 border border-gray-300 rounded-md"
                  value={userDetails.phone}
                  onChange={handleChange}
                />
                {formErrors.phone && (
                  <span className="error text-red-500 mt-1">
                    {formErrors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-row gap-3 w-full">
              <div className="flex flex-col w-full">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 border border-gray-300 rounded-md"
                  value={userDetails.password}
                  onChange={handleChange}
                />
                {formErrors.password && (
                  <span className="error text-red-500 mt-1">
                    {formErrors.password}
                  </span>
                )}
              </div>
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
