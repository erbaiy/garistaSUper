// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// const UpdateForm = ({
//   userId,
//   userData,
//   fetchUsers,
//   updateFormState,
//   setUpdateFormState,
// }) => {
//   const [userDetails, setUserDetails] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     username: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (userData) {
//       setUserDetails({
//         first_name: userData.first_name || "",
//         last_name: userData.last_name || "",
//         email: userData.email || "",
//         phone: userData.phone || "",
//         username: userData.username || "",
//         password: "",
//       });
//     }
//   }, [userData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleUpdateUser = async () => {
//     if (!userDetails.first_name || !userDetails.last_name) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `https://backend.garista.com/api/users/${userId}`,
//         userDetails
//       );

//       if (!response.ok) {
//         const data = await response.json();
//         const errorMessage = data?.errors || "Network response was not ok";
//         throw new Error(errorMessage);
//       }

//       toast.success("User updated successfully");
//       setUpdateFormState(false);
//       fetchUsers(); // Example: Fetch updated data after user update
//     } catch (error) {
//       console.error("Failed to update user:", error);
//       toast.error("Failed to update user");
//     }
//   };

//   return (
//     <Dialog open={updateFormState} onOpenChange={setUpdateFormState}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Update User {userId}</DialogTitle>
//           {/* <div className="flex flex-col gap-3 items-center justify-center pt-4">
//             <div className="flex gap-3">
//               <Input
//                 type="text"
//                 name="first_name"
//                 placeholder="First name"
//                 value={userDetails.first_name}
//                 onChange={handleChange}
//               />
//               <Input
//                 type="text"
//                 name="last_name"
//                 placeholder="Last name"
//                 value={userDetails.last_name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex gap-3">
//               <Input
//                 type="text"
//                 name="email"
//                 placeholder="Email"
//                 value={userDetails.email}
//                 onChange={handleChange}
//               />
//               <Input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone"
//                 value={userDetails.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex gap-3">
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={userDetails.username}
//                 onChange={handleChange}
//               />
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={userDetails.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <DialogClose>
//               <Button onClick={handleUpdateUser}>Update User</Button>
//             </DialogClose>
//           </div> */}
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default UpdateForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UpdateForm = ({
  userId,
  fetchUsers,
  updateFormState,
  setUpdateFormState,
}) => {
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserById = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://backend.garista.com/api/users/${userId}`
        );
        const fetchedUserData = response.data.users.find(
          (user) => user.id === userId
        );

        if (fetchedUserData) {
          setUserDetails({
            first_name: fetchedUserData.first_name,
            last_name: fetchedUserData.last_name,
            email: fetchedUserData.email,
            phone: fetchedUserData.phone,
            username: fetchedUserData.username,
            password: "", // Assuming you don't fetch password for security reasons
          });
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserById();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(
        `https://backend.garista.com/api/users/${userId}`,
        userDetails
      );

      if (response.status === 200) {
        toast.success("User updated successfully");
        setUpdateFormState(false);
        fetchUsers(); // Fetch updated data after user update
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user");
    }
  };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState}>
      <DialogContent>
        {loading ? (
          <div>
            <h1>Loading....</h1>
          </div>
        ) : (
          <DialogHeader>
            <DialogTitle>Update User {userId}</DialogTitle>
            <div className="flex flex-col gap-3 items-center justify-center pt-4">
              <div className="flex gap-3">
                <Input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  value={userDetails.first_name}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  value={userDetails.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-3">
                <Input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-3">
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={userDetails.username}
                  onChange={handleChange}
                />
                {/* Assuming you don't display or update password for security reasons */}
              </div>
              <DialogClose>
                <Button onClick={handleUpdateUser}>Update User</Button>
              </DialogClose>
            </div>
          </DialogHeader>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateForm;
