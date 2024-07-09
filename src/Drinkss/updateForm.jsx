import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from "react";
import ImageUploading from 'react-images-uploading';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Uploader from "./uploader";

export default function UpdateForm({updateFormState, setUpdateFormState}) {

    const [images, setImages] = useState([]);
    const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")
    const maxNumber = 3;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

  return (
    <Dialog open={updateFormState} onOpenChange={setUpdateFormState} className=" p-8 shadow-lg h-[45rem] w-[65rem] rounded-xl">
        <DialogContent style={{ padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '45rem', width: '65rem', maxWidth: '80rem', borderRadius: '1rem' }}>
            <DialogHeader>
                    <h2 className="text-2xl font-bold mb-4 text-center">Update Drinks</h2>
                    <div className='flex items-start gap-10 p-10 '>
                        <div className='w-6/12 '>
                            {/* <div
                                className="h-40 bg-slate-200 flex justify-center items-center rounded cursor-move"
                                draggable="true"

                            >
                                <h1>drag-image...</h1>
                            </div> */}
                            <Uploader />
      {/* <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
                 <form
      onClick={() => document.querySelector(".input-field").click()}
      >
        <input type="file" accept='image/*' className='input-field' hidden
        onChange={({ target: {files}}) => {
          files[0] && setFileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0]))
          }
        }}
         />

        {image ?
        <img src={image} width={150} height={150} alt={fileName} />
        :
        <>
        <MdCloudUpload color='#1475cf' size={60} />
        <p>Browse Files to upload</p>
        </>
      }

      </form>

            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading> */}

                            <div className=''>
                                <Input type="text" placeholder="Title" className='mt-5 mb-5' />
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select Restaurant...</SelectLabel>
                                            <SelectItem value="apple">whd</SelectItem>
                                            <SelectItem value="banana">aweb</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div>
                        <textarea name="" id="" className='mt-5 mb-5 border p-2 min-h-[100px] max-h-[200px]' placeholder='description' cols={48} rows={6}></textarea>
                        <Input type="text" placeholder="Normale Price" className='mt-5 mb-5' />
                        </div>
                    </div>
                    <div className='float-right flex gap-2 items-center '>
                        <button  className='border px-4 py-2 rounded bg-black text-white hover:bg-zinc-600 duration-1000'>Confirm</button>
                        <button  className='border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-800 duration-1000'>Cancel</button>
                    </div>
                </DialogHeader>
                <DialogFooter className="flex justify-center items-center">
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
