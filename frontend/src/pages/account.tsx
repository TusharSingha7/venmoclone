import { useState } from "react";
import AppBar from "../components/appBar";
import Settings from "../components/settings";
import Security from "../components/security";
import Verification from "../components/verification";
import Documents from "../components/documents";

export default function Account(){
    const [compo,setCompo] = useState<JSX.Element>(<Settings></Settings>);
    return (
      <div className="min-h-screen bg-gray-200 overflow-hidden">
        <AppBar />
        <div className="grid grid-cols-10 min-h-full">
          <div className="flex flex-col col-span-10 border-l border-l-slate-600 pl-2 pt-2 mr-2">
              <div className="text-3xl text-purple-600 mx-2">Accounts</div>
              <div className="flex my-2 flex-wrap">
                  <button onClick={()=>{
                    setCompo(<Settings/>);
                  }} className="rounded-full bg-white px-2 mx-2 text-sm font-bold my-1">Settings</button>
                  <button onClick={()=>{
                    setCompo(<Security/>);
                  }} className="rounded-full bg-white px-2 mx-2 text-sm font-bold my-1">Security</button>
                  <button onClick={()=>{
                    setCompo(<Verification/>);
                  }} className="rounded-full bg-white px-2 mx-2 text-sm font-bold my-1">Verification</button>
                  <button onClick={()=>{
                    setCompo(<Documents/>);
                  }} className="rounded-full bg-white px-2 mx-2 text-sm font-bold my-1">Documents</button>
              </div>
              {compo}
          </div>
        </div>
      </div>
    );
}
