import BreadCrumb from "@/app/components/common/BreadCrumb";
import ChatMain from "./_components/ChatMain";
import ContextProvider from "./ContextProvider";



export default async function ChatLayout({ children, }: { children: React.ReactNode; }) {

    return (
        <>
            <BreadCrumb />
            <ChatMain>
                {children}
            </ChatMain>
        </>
    );
}
