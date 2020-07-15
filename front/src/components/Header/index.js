import React from "react";
import { Layout } from "antd";
import './header.scss'
const { Header } = Layout;

const HeaderNav = () => {
    return(
        <Header className="header">
            <div class="logo-link-container"><a class="logo-link" href="/"></a></div>
        </Header>
    )
}

export default HeaderNav