import {FC, PropsWithChildren} from 'react';
import AuthProvider from "@providers/AuthProvider";

const MainProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default MainProvider;