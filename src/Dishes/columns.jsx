import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { handleDeleteResto } from "./data-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import UpdateForm from "./updateForm";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
export const columns = [
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "user.username",
    header: "User",
  },
  {
    accessorKey: "active",
    header: "active",
    cell: ({ row }) => {
      const [isActive, setIsActive] = useState(row.getValue("active"));

      const handleToggleChange = () => {
        setIsActive(!isActive);
      };

      return (
        <div className="capitalize">
          <Switch onClick={handleToggleChange} checked={isActive} />
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row, handleDeleteResto }) => {
      const [updateFormState, setUpdateFormState] = useState(false);

      return (
        <>
          <div className="flex gap-2">
            <Button onClick={() => setUpdateFormState(true)}>
              <BiSolidEdit size={20} />
            </Button>

            <Dialog className="items-center justify-center">
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-black">
                  <BiSolidTrash size={20} />
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px] items-center justify-center ">
                <DialogHeader className="items-center justify-center ">
                  <MdErrorOutline size={80} />
                  <DialogTitle className="flex items-center text-[1.7rem]">
                    {" "}
                    Are you sure ?
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Button onClick={() => handleDeleteResto(row.original.id)}>
                      Yes
                    </Button>
                    <input type="text" name="" value={row.original.id} id="" />
                    <Button>No</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <UpdateForm
            updateFormState={updateFormState}
            setUpdateFormState={setUpdateFormState}
          />
        </>
      );
    },
  },
];

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { BiSolidEdit } from "react-icons/bi";
// import { BiSolidTrash } from "react-icons/bi";
// import { MdErrorOutline } from "react-icons/md";
// import { ArrowUpDown, MoreHorizontal } from "lucide-react";
// import { IoCheckmarkOutline } from "react-icons/io5";
// import { Switch } from "@/components/ui/switch";
// import UpdateForm from "./updateForm";
// import axios from "axios";

// export const columns = [
//   {
//     accessorKey: "name",
//     header: "NAME",
//   },
//   {
//     accessorKey: "slug",
//     header: "Slug",
//   },
//   {
//     accessorKey: "user.username",
//     header: "User",
//   },
//   {
//     accessorKey: "visible",
//     header: "VISIBLE",
//     cell: ({ row }) => {
//       const [isActive, setIsActive] = useState(row.getValue("visible"));

//       const handleToggleChange = () => {
//         setIsActive(!isActive);
//       };
//       return (
//         <div className="capitalize">
//           <Switch onClick={handleToggleChange} checked={isActive} />
//         </div>
//       );
//     },
//   },

//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const payment = row.original;

//       const [updateFormState, setUpdateFormState] = useState(false);
//       const [dialogOpen, setDialogOpen] = useState(false);

//       const handleDelete = async () => {
//         try {
//           await axios.delete(`http://127.0.0.1:8000/api/restos/${payment.id}`);
//           setDialogOpen(false);
//           console.log(payment.id);
//           // Optionally, you can refresh the data here or update the state to remove the deleted item
//         } catch (error) {
//           console.error("Failed to delete the item", error);
//           console.log(payment.id);
//         }
//       };
//       return (
//         <>
//           <div className="flex gap-2">
//             <Button onClick={() => setUpdateFormState(true)}>
//               <BiSolidEdit size={20} />
//             </Button>

//             <Dialog
//               open={dialogOpen}
//               onOpenChange={setDialogOpen}
//               className="items-center justify-center"
//             >
//               <DialogTrigger asChild>
//                 <Button variant="outline" className="bg-black">
//                   <BiSolidTrash size={20} />
//                 </Button>
//               </DialogTrigger>

//               <DialogContent className="sm:max-w-[425px] items-center justify-center">
//                 <DialogHeader className="items-center justify-center">
//                   <MdErrorOutline size={80} />
//                   <DialogTitle className="flex items-center text-[1.7rem]">
//                     Are you sure?
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid grid-cols-2 items-center gap-4">
//                     <Button onClick={handleDelete}>Yes</Button>
//                     <Button onClick={() => setDialogOpen(false)}>No</Button>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>

//           <UpdateForm
//             updateFormState={updateFormState}
//             setUpdateFormState={setUpdateFormState}
//           />
//         </>
//       );
//     },
//   },
// ];
