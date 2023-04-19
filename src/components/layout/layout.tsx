import { ReactComponentElement, ReactHTMLElement } from "react";
import MainNavigation from "./main-navigation";

export default function Layout( props: React.PropsWithChildren){
    return (
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </>
    )
}