// import React, { useState } from "react";
// import { ColumnDef } from "@tanstack/react-table";

// import { Checkbox } from "@/components/ui/checkbox";
// import { User } from "../types"; // Adjust the path to your User type if needed
// import { DataTableColumnHeader } from "./data-table-column-header";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// // import { handleDeleteUser } from "./data-table";
// // import { handleDeleteUser } from "./data-table.tsx";
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
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Switch } from "@/components/ui/switch";
// import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
// import { MdErrorOutline } from "react-icons/md";

// // Assuming you have a function or component for rendering actions
// const ActionsCell = ({ row }) => (
//   <div>
//     {/* Example of actions, you should replace this with your actual implementation */}
//     <button>Edit</button>
//     <button>Delete</button>
//   </div>
// );

// export const columns: ColumnDef<User>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//         className="translate-y-[2px]"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="translate-y-[2px]"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="ID" />
//     ),
//     cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "first_name",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="First Name" />
//     ),
//     cell: ({ row }) => <div>{row.getValue("first_name")}</div>,
//   },
//   {
//     accessorKey: "last_name",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Last Name" />
//     ),
//     cell: ({ row }) => <div>{row.getValue("last_name")}</div>,
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="Email" />
//     ),
//     cell: ({ row }) => <div>{row.getValue("email")}</div>,
//   },
//   // {
//   //   id: "actions",
//   //   header: ({ column }) => (
//   //     <DataTableColumnHeader column={column} title="Actions" />
//   //   ),
//   //   cell: ({ row }) => {
//   //     const user = row.original; // Assuming 'original' contains the user object

//   //     return (
//   //       <DropdownMenu>
//   //         <DropdownMenuTrigger asChild>
//   //           <button className="h-8 w-8 p-0">
//   //             <span className="sr-only">Open menu</span>
//   //             {/* Replace with your icon or content for trigger */}
//   //             <span>...</span>
//   //           </button>
//   //         </DropdownMenuTrigger>
//   //         <DropdownMenuContent align="center">
//   //           {/* DropdownMenuLabel is not defined in your imports */}

//   //           <DropdownMenuItem
//   //             onClick={() => {
//   //               // Replace with your update logic
//   //               console.log(`Updating user ${user.id}`);
//   //             }}
//   //           >
//   //             Update
//   //           </DropdownMenuItem>
//   //           <DropdownMenuItem
//   //             onClick={() => {
//   //               // Replace with your delete logic
//   //               console.log(`Deleting user ${user.id}`);
//   //             }}
//   //           >
//   //             Delete
//   //           </DropdownMenuItem>
//   //           <DropdownMenuSeparator />
//   //         </DropdownMenuContent>
//   //       </DropdownMenu>
//   //     );
//   //   },
//   //   enableSorting: false,
//   //   enableHiding: false,
//   // },

//   {
//     id: "actions",
//     cell: ({ row, handleDeleteResto }) => {
//       const [updateFormState, setUpdateFormState] = useState(false);

//       return (
//         <>
//           <div className="flex gap-2">
//             <Button onClick={() => setUpdateFormState(true)}>
//               <BiSolidEdit size={20} />
//             </Button>

//             <Dialog className="items-center justify-center">
//               <DialogTrigger asChild>
//                 <Button variant="outline" className="bg-black">
//                   <BiSolidTrash size={20} />
//                 </Button>
//               </DialogTrigger>

//               <DialogContent className="sm:max-w-[425px] items-center justify-center ">
//                 <DialogHeader className="items-center justify-center ">
//                   <MdErrorOutline size={80} />
//                   <DialogTitle className="flex items-center text-[1.7rem]">
//                     {" "}
//                     Are you sure ?
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid grid-cols-2 items-center gap-4">
//                     <Button onClick={() => handleDeleteUser(row.original.id)}>
//                       Yes
//                     </Button>
//                     <input type="text" name="" value={row.original.id} id="" />
//                     <Button>No</Button>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//           {/*
//           <UpdateForm
//             updateFormState={updateFormState}
//             setUpdateFormState={setUpdateFormState}
//           /> */}
//         </>
//       );
//     },
//   },
// ];

import * as React from "react";
import { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { User } from "../types"; // Adjust the path to your User type if needed
import { DataTableColumnHeader } from "./data-table-column-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { handleDeleteUser } from "./data-table";
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
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";

// Assuming you have a function or component for rendering actions
const ActionsCell = ({ row }) => {
  const [updateFormState, setUpdateFormState] = useState(false);
  const handleDeleteUser = async (userId: number) => {
    try {
      // Make DELETE request to the API endpoint
      await axios.delete(
        `https://backend.garista.com/api/auth/delete/${userId}`
      );
      // Example: fetch updated data from the API

      console.log(`User ${userId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting user ${userId}:`, error);
    }
  };
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
                <Button onClick={() => handleDeleteUser(row.original.id)}>
                  Yes
                </Button>
                <input type="text" name="" value={row.original.id} id="" />
                <Button>No</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {/* 
      <UpdateForm
        updateFormState={updateFormState}
        setUpdateFormState={setUpdateFormState}
      /> */}
    </>
  );
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("first_name")}</div>,
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("last_name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <ActionsCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
