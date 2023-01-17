import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import {RiFacebookFill} from 'react-icons/ri'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-wrap">
          <div className="sm:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="sm:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="sm:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex sm:w-[30%] w-full sm:justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="sm:w-[40%]">
            <Image imgsrc="assets/logo.png" />
          </div>
        </Flex>
        <Flex className="sm:flex  items-center pt-8">
          <div className="w-full sm:w-2/4">
            <ul className="flex items-center sm:items-start gap-x-6">
              <li><Link to="#"><RiFacebookFill/></Link></li>
              <li><Link to="#"><FaLinkedinIn/></Link></li>
              <li><Link to="#"><BsInstagram/></Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-2/4 mt-3 sm:mt-0 text-center sm:text-right">
            <p className="font-dm font-normal text-base text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;