
import {useState} from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { IoCheckmarkOutline } from "react-icons/io5"
import { Switch } from '@/components/ui/switch'
export const columns = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "date",
        header: "DATE",
      },
      {
        accessorKey: "items",
        header: "ITEMS",
      },
      {
        accessorKey: "subtotal",
        header: "SUBTOTAL",
      },
      {
        accessorKey: "table",
        header: "TABLE",
      },
      {
        accessorKey: "status",
        header: "STATUS",
        cell: ({ row }) => {
                  const payment = row.original
                  const [choose,setChoose] = useState('')

                  let backgroundColor = '';
                  if(choose == "Canceled")
                  {
                    backgroundColor = "#ffe1df"
                  }
                  else if(choose == "New"){
                    backgroundColor = "#C4E4FF"
                  }
                  else if(choose == "Processing"){
                    backgroundColor = "#FFC374"
                  }
                  else if(choose == "Completed"){
                    backgroundColor = "#D9EDBF"
                  }

                  console.log("The Status Valuse => ", choose)

                  return (
                    <Select onValueChange={(val) => setChoose(val)} >
                    <SelectTrigger className={`w-[120px] `} style={{backgroundColor: backgroundColor}}>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Canceled">Canceled</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>

                  )
                },
              },



//   {
//     id: "actions",
//     header:"ACTIONS",
//     cell: ({ row }) => {
//       const payment = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="center">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Update
//             </DropdownMenuItem>

//             <DropdownMenuItem>Delete</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
  // ...
]



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


