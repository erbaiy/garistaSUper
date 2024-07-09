import React,{useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
  import {Label} from "@/components/ui/label"
  import { Switch } from "@/components/ui/switch"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import ImageUploading from 'react-images-uploading';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Uploader from "./uploader";
import { Button } from "@/components/ui/button"

export default function UpdateForm({updateFormState, setUpdateFormState}) {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [role,setRole] = useState("");
    const [password,setPassword] = useState(""); // État pour stocker le rôle sélectionné
    const [modalOpen, setModalOpen] = useState(false);
    const [position, setPosition] = React.useState("bottom")
    const [tableNames, setTableNames] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [qrValue, setQrValue] = useState("");
    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleAddUser = () => {
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            role: role // Utilisation de l'état du rôle sélectionné
        };

        setUsersList([...usersList, newUser]);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setRole("");
        console.log(usersList);
        setModalOpen(false);
    };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState} className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
       <DialogContent className="max-w-[50rem]">
                    <DialogHeader>
                        <DialogTitle>Update Categorie</DialogTitle>
                        <DialogDescription >Create a new Categories Lorem ipsum dolor sit amet consectetur </DialogDescription>
                        <div className="flex flex-col gap-3 items-center justify-center pt-4">
                            <div className="flex gap-3">
                                <Input type="text" placeholder=" name" className="w-[37rem] p-2 border border-gray-300 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex gap-3">
                            <Uploader />
                            </div>
                            <div className="flex gap-3 ">
                            <Label  style={{fontSize:"20px"}}>Visibilty</Label>
                            <Switch />
                            </div>
                            <DialogClose>
                                <Button variant="outline" className="justify-end items-end bg-black" onClick={handleAddUser}>Update Categories</Button>
                            </DialogClose>
                        </div>
                    </DialogHeader>
                </DialogContent>
    </Dialog>
  )
}
