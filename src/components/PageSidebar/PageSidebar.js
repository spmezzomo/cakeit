import React from "react";
import { Link } from "gatsby";
import SidebarMessage from "../SidebarMessage/SidebarMessage";
import PageIcon from "../../images/page-icon.svg";
import { Wrapper, Menu } from "./PageSidebar.styles";

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {

    const getParentContent = () => (
        <>
            <li className="sidebar-menu-header">
                <img src={PageIcon} alt="icon" />
                <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            </li>
            {children.nodes.map(child => (
                <li key={ child.id }>
                    <Link to={child.uri}>
                        <span dangerouslySetInnerHTML={{ __html:child.title }} />
                    </Link>
                </li>
            ))}
        </>
    )

    const getChildContent = () => (
        <>
            <li className="sidebar-menu-header">
                <img src={PageIcon} alt="icon" />
                <span dangerouslySetInnerHTML={{ __html: parent }} />
            </li>
            {parentChildren.map(child => (
                <li key={ child.id }>
                    <Link to={child.uri} activeClassName="sidebar-highlighted">
                        <span dangerouslySetInnerHTML={{ __html: child.title }} />
                    </Link>
                </li>
            ))}
        </>
    )

    return (
        <Wrapper>
            {children.nodes.lenght === 0 && !parent ? (
                <SidebarMessage />
            ) : (
                <Menu>{parent ? getChildContent() : getParentContent()}</Menu>
            )}
        </Wrapper>
        
    )

}

export default PageSidebar