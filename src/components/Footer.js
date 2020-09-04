import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Footer() {
    return (
        <div>
            <nav className="footer navbar justify-content-around">
                {/* <table>
                    <tbody>
                        <tr>
                            <td>
                                <a className="gitIcon" href="https://github.com/gurungbjta" ><VscGithub/></a>
                            </td>
                            <td>
                                <a className="icon" href="https://github.com/gurungbjta"><TiSocialFacebookCircular/></a>
                            </td>
                            <td>
                            <a className="icon" href="https://www.linkedin.com/in/bijayatagurung/"><TiSocialLinkedinCircular/></a>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
                <div className="center">
                    <a className="gitIcon" href="https://github.com/gurungbjta"><VscGithub/></a>
                    <a className="icon ml-4 mr-4 pl-4 pr-4" href="https://github.com/gurungbjta"><TiSocialFacebookCircular/></a>
                    <a className="icon" href="https://www.linkedin.com/in/bijayatagurung/"><TiSocialLinkedinCircular/></a>
                </div>
            </nav>
        </div>
        
    )
}
