import React from "react";

import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaTiktok,
  FaSnapchatSquare,
  FaYoutube,
} from "react-icons/fa";
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiTiktokLogoLight } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { BsSnapchat } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const description =
  "A product edit page. The product edit page has a form to edit the product details, stock, product category, product status, and product images. The product edit page has a sidebar navigation and a main content area. The main content area has a form to edit the product details, stock, product category, product status, and product images. The sidebar navigation has links to product details, stock, product category, product status, and product images.";

export const iframeHeight = "1200px";

export const containerClassName = "w-full h-full";

export default function DashboardCompany() {
  return (
    // <TooltipProvider>
    <>
      <div className="flex items-center justify-between space-y-2 p-4 bg-muted/40">
        <h2 className="text-3xl font-bold tracking-tight">
          Restaurant Settings
        </h2>
        <div
          className="flex items-center space-x-2 "
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: ".5rem",
          }}
        >
          <Button>Save</Button>
        </div>
      </div>
      <div className="flex gap-4 min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-10 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[140rem] flex-1 auto-rows-max gap-4">
              <div className="grid gap-10 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-9">
                <div className="grid auto-rows-max items-start gap-10 lg:col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="border-b-2 pb-2">About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="">
                        <div className="flex flex-col md:flex-row w-full py-5 gap-5 items-center">
                          <div className="w-full md:w-1/2">
                            <label className="">Name :</label>
                            <Input
                              className="mt-3"
                              placeholder="name"
                              type="text"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <label className="block mb-3">Logo :</label>
                            <Input
                              id="example1"
                              type="file"
                              class="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-neutral-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full  gap-5 items-center">
                          <div className="w-full md:w-full">
                            <label className="block mb-3">Description :</label>
                            <Input
                              className="mt-3"
                              placeholder="description"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-full">
                          <label className="block mb-3">Cover Photo :</label>
                          <Input
                            id="example1"
                            type="file"
                            class="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-neutral-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                          />
                        </div>
                        <div className="w-full md:w-full">
                          <label className="block mb-3">Adress :</label>
                          <Input
                            className="mt-3"
                            placeholder="Adress"
                            type="text"
                          />
                        </div>
                        <div className="flex flex-col md:flex-row w-full py-5 gap-5 items-center">
                          <div className="w-full md:w-1/2">
                            <label className="block mb-3">Currency :</label>
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Méthode de paiement" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Méthode de paiement</SelectLabel>
                                  <SelectItem value="card">
                                    Carte de crédit
                                  </SelectItem>
                                  <SelectItem value="paypal">PayPal</SelectItem>
                                  <SelectItem value="cash">Espèces</SelectItem>
                                  <SelectItem value="transfer">
                                    Virement bancaire
                                  </SelectItem>
                                  <SelectItem value="crypto">
                                    Crypto-monnaie
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="w-full md:w-1/2">
                            <label className="block mb-3">
                              Wifi password :
                            </label>
                            <Input
                              id="picture"
                              type="text"
                              className="mt-3"
                              placeholder="wifi"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="example7"
                            className="mb-1 block text-sm font-medium text-gray-700"
                          >
                            Restaurant URL :
                          </label>
                          <div className="relative z-0 flex">
                            <div className="inset-y-0 left-0 flex items-center rounded-md rounded-r-none border border-r-0 border-gray-300 bg-gray-100 px-2.5 text-gray-700">
                              https://
                            </div>
                            <Input
                              type="url"
                              id="example7"
                              className="block w-full rounded-md rounded-l-none border border-gray-300 shadow-sm focus:z-10 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                              placeholder="example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="border-b-2 pb-2">
                        Tracking
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid ">
                        <div className="flex flex-col md:flex-row w-full py-5 gap-5 items-center">
                          <div className="w-full md:w-1/2">
                            <label className="">Google analytics :</label>
                            <Input
                              className="mt-3"
                              placeholder="Google analytics"
                              type="text"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <label className="block mb-3">
                              Facebook Pixel :
                            </label>
                            <Input
                              className="mt-3"
                              placeholder="Facebook Pixel"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full  gap-5 items-center">
                          <div className="w-full md:w-full">
                            <label className="block mb-3">
                              Google ads Pixel :
                            </label>
                            <Input
                              className="mt-3"
                              placeholder="Google ads Pixel"
                              type="text"
                            />
                          </div>
                          <div className="w-full md:w-full">
                            <label className="block mb-3">Tiktok pixel :</label>
                            <Input
                              className="mt-3"
                              placeholder="Tiktok pixel"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {/* <Card>
                    <CardHeader>
                    <CardTitle className='border-b-2 pb-2'>Tracking</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-col md:flex-row w-full pt-5 gap-5 items-center'>
                        <div className='w-full md:w-full'>
                        <label className='block mb-3'>Trustpilot :</label>
                            <Input  className='mt-3' placeholder='Trustpilot' />
                        </div>
                        <div className='w-full md:w-full'>
                            <label className='block mb-3'>Google Business :</label>
                            <Input  className='mt-3' placeholder='Google Business' />
                            </div>
                        </div>
                    </CardContent>
                    </Card> */}
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card className="overflow-hidden ">
                    <CardHeader>
                      <CardTitle className="border-b-2 pb-2">
                        Social Media
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                      <div>
                        <div className="flex items-center m-5 justify-center">
                          <AiOutlineInstagram className="w-10 h-10 text-gray-500" />
                          <Input
                            className="m-5 w-[16rem]"
                            placeholder="Instagram Account..."
                          />
                        </div>
                        <div className="flex items-center m-5">
                          <FiFacebook className="w-10 h-10 text-gray-500" />
                          <Input
                            className="m-5 w-[16rem]"
                            placeholder="Instagram Account..."
                          />
                        </div>
                        <div className="flex items-center m-5">
                          <PiTiktokLogoLight className="w-10 h-10 text-gray-500" />
                          <Input
                            className="m-5 w-[16rem]"
                            placeholder="Instagram Account..."
                          />
                        </div>
                        <div className="flex items-center m-5">
                          <BsSnapchat className="w-10 h-10 text-gray-500" />
                          <Input
                            className="m-5 w-[16rem]"
                            placeholder="Instagram Account..."
                          />
                        </div>
                        <div className="flex items-center m-5">
                          <AiOutlineYoutube className="w-10 h-10 text-gray-500" />
                          <Input
                            className="m-5 w-[16rem]"
                            placeholder="Instagram Account..."
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="border-b-2 pb-2">
                        Feedback
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full md:w-full">
                        <label className="block mb-3">Trustpilot :</label>
                        <Input className="mt-3" placeholder="Trustpilot" />
                      </div>
                      <div className="w-full md:w-full">
                        <label className="block mb-3">Google Business :</label>
                        <Input className="mt-3" placeholder="Google Business" />
                      </div>
                    </CardContent>
                  </Card>
                  {/* <Card>
                    <CardHeader>
                        <CardTitle>Archive Product</CardTitle>
                        <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div></div>
                        <Button size="sm" variant="secondary">
                        Archive Product
                        </Button>
                    </CardContent>
                    </Card> */}
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm">Save Product</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>

    // </TooltipProvider>
  );
}
