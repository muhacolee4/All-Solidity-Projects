import React, { useContext } from "react";
const isLoading = {};
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
const connectWallet = () => {};
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const handleChange = () => {};

const handleSubmit = (e) => {
  const { addressTo, amount, keyword, message } = formData;

  e.preventDefault();

  if (!addressTo || !amount || !keyword || !message) return;

  sendTransaction();
};
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Welcome = () => {
  return (
    <div className=" flex w-full items-center p-4">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 md:border gap-x-10 rounded-tl-sm justify-inbetween p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto
            <br /> across the world
          </h1>
          <p className="text-center mt-5 text-white font-light md:w-f text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            CryptoEase. Connect wallet to get started
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" m-4 p-3 flex  items-start justify-between flex-col rounded-xl h-40 sm:w-72 w-full bg-gradient-to-br from-yellow-400 to-yellow-600 .white-glassmorphism ">
            <div id="card_logo_info" className="flex justify-between w-full">
              <div
                id="eth"
                className="w-10 h-10 border rounded-full flex
                justify-center items-center"
              >
                <SiEthereum fontSize={21} color="fff" />
              </div>
              <BsInfoCircle color="white" />
            </div>
            <div
              id="render_addr"
              className="flex flex-start flex-col items-start"
            >
              <p>0x......9af80</p>
              <p className="text-bold text-white text-left">
                CryptoEase Ethereum
              </p>
            </div>
          </div>
          <div
            id="div_form"
            className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"
          >
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
