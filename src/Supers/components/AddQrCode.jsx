import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";
import UpdateForm from "./updateForm";
import DeleteForm from "./deleteForm";

export const UserContext = createContext();
const tableNames = []; // Define an empty array

function AddQrCode() {
  const { state } = useLocation();
  const { names } = state || { value: "tes" };

  const [usersList, setUsersList] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState("bottom");
  const [updateFormState, setUpdateFormState] = useState(false);
  const [deleteFormState, setDeleteFormState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [errors, setErrors] = useState({}); // New state for individual input errors

  const fetchUsers = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/super-admin-staff")
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const handleAddUser = async () => {
    const newErrors = {};

    // Basic validation
    if (!firstname) newErrors.firstname = "First name is required";
    else if (firstname.length < 3)
      newErrors.firstname = "First name must be at least 3 characters long";

    if (!lastname) newErrors.lastname = "Last name is required";
    else if (lastname.length < 3)
      newErrors.lastname = "Last name must be at least 3 characters long";

    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (international format)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic international phone number format
    if (phone && !phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Password validation (strong password)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (password && !passwordRegex.test(password)) {
      newErrors.password =
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Don't proceed if there are errors
      return;
    }

    const newUser = {
      first_name: firstname,
      last_name: lastname,
      email,
      phone,
      password,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/super-admin-staff",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        if (data && data.errors) {
          setErrors(data.errors);
          toast.error("Failed to add user. Please check the errors.");
          return;
        } else {
          throw new Error("Network response was not ok");
        }
      } else {
        const data = await response.json();
        setUsersList((prevUsersList) => [...prevUsersList, data]);
        toast.success("User added successfully!");

        // Clear the form fields
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setPassword("");
        setErrors({}); // Clear error messages

        // Close the modal if no errors
        closeModal(); // Assuming you have a closeModal function to close the modal
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      setErrors({ general: "Failed to add user" });
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // const handleAddUser = async () => {
  //   const newErrors = {};

  //   // Basic validation
  //   if (!firstname) newErrors.firstname = "First name is required";
  //   if (!lastname) newErrors.lastname = "Last name is required";
  //   if (!email) newErrors.email = "Email is required";
  //   if (!phone) newErrors.phone = "Phone is required";
  //   // if (!username) newErrors.username = "Username is required";
  //   if (!password) newErrors.password = "Password is required";
  //   else if (password.length < 8)
  //     newErrors.password = "Password must be at least 8 characters long";

  //   // Email validation
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   if (email && !emailRegex.test(email)) {
  //     newErrors.email = "Please enter a valid email";
  //   }

  //   // Phone validation (basic example, adjust as needed)
  //   const phoneRegex = /^\d{10}$/; // Adjust this regex to match the phone number format you expect
  //   if (phone && !phoneRegex.test(phone)) {
  //     newErrors.phone = "Please enter a valid phone number";
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length > 0) {
  //     // Don't proceed if there are errors
  //     return;
  //   }

  //   const newUser = {
  //     first_name: firstname,
  //     last_name: lastname,
  //     email,
  //     phone,
  //     password,
  //   };

  //   try {
  //     const response = await fetch(
  //       "http://127.0.0.1:8000/api/super-admin-staff",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newUser),
  //       }
  //     );

  //     if (!response.ok) {
  //       const data = await response.json();
  //       if (data && data.errors) {
  //         setErrors(data.errors);
  //         toast.error("Failed to add user. Please check the errors.");
  //         return;
  //       } else {
  //         throw new Error("Network response was not ok");
  //       }
  //     } else {
  //       const data = await response.json();
  //       setUsersList((prevUsersList) => [...prevUsersList, data]);
  //       toast.success("User added successfully!");

  //       // Clear the form fields
  //       setFirstname("");
  //       setLastname("");
  //       // setUsername("");
  //       setEmail("");
  //       setPhone("");
  //       setPassword("");
  //       setErrors({}); // Clear error messages
  //     }
  //   } catch (error) {
  //     console.error("Error inserting data:", error);
  //     setErrors({ general: "Failed to add user" });
  //     toast.error("An error occurred. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/super-admin-staff/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        fetchUsers();
        setDeleteFormState(false);
        toast.success("User Deleted Successfully!");
      } else {
        console.error("Failed to delete user");
        setErrors({ general: "Failed to delete user" });
        Swal.fire("Error!", "Failed to delete the user.", "error");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      setErrors({ general: "Error deleting user" });

      toast.error("An error occurred while deleting the user.");
    }
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setUpdateFormState(true);
  };

  return (
    <div className="flex gap-5" style={{ flexWrap: "wrap" }}>
      <ToastContainer />

      {usersList.map((user, index) => (
        <div key={index}>
          <Card className="w-[250px] h-[280px]">
            <DropdownMenu className="flex justify-end">
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex justify-end"
                  style={{ backgroundColor: "white" }}
                >
                  <BiDotsVerticalRounded size={25} color="black" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuItem onSelect={() => handleUpdateClick(user)}>
                    Update
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setDeleteFormState(user)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <CardHeader className="flex text-center justify-end">
              <CardTitle>{user.first_name} </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="m-5 ml-10 flex mt-0 gap-10">
                <FaUserCircle size={100} className="w-19 h-19 m-auto" />
              </div>
              <div className="justify-center text-zinc-500">{user.email}</div>
            </CardContent>
            <CardFooter className="justify-center"></CardFooter>
          </Card>
          <UpdateForm
            updateFormState={updateFormState}
            setUpdateFormState={setUpdateFormState}
            userId={selectedUser ? selectedUser.id : null}
            userData={selectedUser}
            fetchUsers={fetchUsers}
            setError={setErrors} // Pass setErrors to UpdateForm
          />
          {deleteFormState === user && (
            <DeleteForm
              deleteFormState={deleteFormState}
              setDeleteFormState={setDeleteFormState}
              handleDeleteUser={handleDeleteUser}
              userId={user.id} // Pass the user id to the DeleteForm component
            />
          )}
        </div>
      ))}

      <Dialog>
        <DialogTrigger>
          <Card className="w-[250px] h-[280px] border-dashed grid place-content-center">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">
                Add managers or waiters for your restaurant
              </CardTitle>
            </CardHeader>
            <CardContent>
              {tableNames &&
                tableNames.map((tableName, index) => (
                  <div key={index}>{tableName.name}</div>
                ))}
              <UserContext.Provider value={usersList}>
                <button
                  className="flex justify-center items-center bg-white w-full h-full border-none cursor-pointer"
                  onClick={() => {
                    console.log("Icon clicked");
                  }}
                >
                  <MdAddBox size={50} style={{ color: "#000" }} />
                </button>
              </UserContext.Provider>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-[50rem]">
          <DialogHeader>
            <DialogTitle>Add a new User</DialogTitle>
            <DialogDescription>
              Create a new user Lorem ipsum dolor sit amet consectetur
            </DialogDescription>
            <div className="flex flex-col gap-3 items-center justify-center pt-4">
              {errors.general && (
                <div className="text-red-500">{errors.general}</div>
              )}
              <div className="flex gap-3">
                <div>
                  <Input
                    type="text"
                    placeholder="First name"
                    className="w-72 p-2 border border-gray-300 rounded-md"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last name"
                    className="w-72 p-2 border border-gray-300 rounded-md"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm">{errors.lastname}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <Input
                    type="text"
                    placeholder="Email"
                    className="w-72 p-2 border border-gray-300 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Phone"
                    className="w-72 p-2 border border-gray-300 rounded-md"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                {/* <div>
                  <Input
                    type="text"
                    placeholder="Username"
                    className="w-72 p-2 border border-gray-300 rounded-md"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  )}
                </div> */}
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-72 p-2 border border-gray-300 rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
              </div>
              <DialogClose>
                <Button
                  variant="outline"
                  className="justify-end items-end bg-black text-white"
                  onClick={handleAddUser}
                >
                  Add User
                </Button>
              </DialogClose>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddQrCode;
