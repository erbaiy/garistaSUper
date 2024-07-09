import React, { createContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import TabsDemo from '../../components/custom/tabs';
import QrCodeTemplate from './QrCodeTemplate';
import TabsDemoCustom from './TabsDemoCustom';
import { QRCode } from 'react-qrcode-logo';

export const UserContext = createContext();

function AddQrCode({props}) {
    const { state } = useLocation();

    const { names } = state == null ? "tes" : state.value;


    console.log("qr",names)

  const [user, setUser] = useState([{ nom: 'toto' },{ nom: 'titi' }]);
  console.log(user);
  const [tableNames, setTableNames] = useState([]);

  // Fonction pour mettre à jour tableNames
  const updateTableNames = (newTableNames) => {
      setTableNames(newTableNames);
  };
  const [qrValue,setQrValue] =useState()

  return (
    <div className='flex gap-5'>

        {names?
        (<div>
            <Dialog >
            <DialogTrigger asChild>
                <button>
            <Card className="w-[250px] h-[250px]">
        <CardHeader  className="text-center">
          <CardTitle>Table {names}</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="m-5 ml-10 flex mt-0 gap-10 ">
        <QRCode
            id="qrcode-id-unique"
            value="https://fadadoussama.com/"
            logoImage="/Logos/qrcode-logo.png"
            logoWidth={40}
            className="w-64 h-64"
         />
        </div>
        </CardContent>
      </Card>
      </button>
      </DialogTrigger >
      <DialogContent className="max-w-[85rem]">
      <div className='m-5 ml-10 flex mt-10 gap-10 '>
                <QrCodeTemplate setQrValue={setQrValue}/>
                <div>
                    <TabsDemoCustom qrValue={qrValue} setQrValue={setQrValue}/>

                </div>
            </div>
    </DialogContent>
        </Dialog>


        </div>)
        :null}
         <Card className="w-[250px] h-[250px]">
        <CardHeader  className="text-center">
          <CardTitle>Menu</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="m-5 ml-10 flex mt-0 gap-10 ">
        <QRCode
            id="qrcode-id-unique"
            value="https://fadadoussama.com/"
            logoImage="/Logos/qrcode-logo.png"
            logoWidth={40}
            className="w-64 h-64"
         />
        </div>
        </CardContent>
      </Card>
        <Link to="/QrCode/AddQrCode">
            <div className='flex gap-4'>

            <Card className="w-[250px] h-[250px] border-dashed grid place-content-center">
                <CardHeader className="text-center">
                <CardTitle>Add a QrCode</CardTitle>
                <CardDescription>
                    You made 265 sales this month.
                </CardDescription>
                </CardHeader>
                <CardContent>
                {/* Afficher le tableau de noms de tables */}
                {tableNames.map((tableName, index) => (
                    <div key={index}>{tableName.nom}</div>
                ))}
                <UserContext.Provider value={user}>
                {/* <TabsDemo tableNames={tableNames} updateTableNames={updateTableNames} /> */}

                    <button
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        cursor: 'pointer',
                        }}
                        onClick={() => {
                        // Action à effectuer lors du clic sur l'icône
                        console.log('Icon clicked');
                        }}
                    >
                        <MdAddBox size={50} style={{ color: '#000' }} />
                    </button>
                    {/* </Link> */}
                </UserContext.Provider>
                </CardContent>
            </Card>
            </div>
        </Link>
    </div>
  );
}

export default AddQrCode;
