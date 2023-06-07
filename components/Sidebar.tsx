import React from "react";
import { headerLinks } from "@/lib/copy";
import Link from "next/link";
import { navStore } from "@/stateHooks/sidebarNav";

export default function Sidebar() {
  const { sidebarMenu, toggleSidebarMenu } = navStore();
  const sidebarClassNames = `drawer-side md:hidden absolute w-full ${
    sidebarMenu ? "z-10" : ""
  }`;
  return (
    <>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarMenu}
        onChange={toggleSidebarMenu}
      />
      {
        <div className={sidebarClassNames} style={{ top: "inherit" }}>
          <label
            htmlFor="my-drawer"
            className="drawer-overlay md:hidden"
          ></label>
          <ul className="menu p-4 pb-48 w-full bg-base-100 text-base-content md:hidden">
            {
              <ul className=" p-4 w-80 bg-base-100 ">
                {headerLinks.map((link) => {
                  if (link.subItems) {
                    return (
                      <li key={`sidenav${link.label}${link.href}`}>
                        <div className="group relative flex items-center ">
                          {link.icon ? <link.icon /> : null}
                          {link.label}
                        </div>
                        <ul className=" p-4 pt-0 w-70 bg-base-100 ">
                          {link.subItems.map((subItem) => (
                            <li key={`sidenav${subItem.label}${subItem.href}`}>
                              <Link href={subItem.href}>
                                {subItem.label}
                                {subItem.icon ? <subItem.icon /> : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li key={`sidenav${link.label}`}>
                        <Link href={link.href}>
                          {link.icon ? <link.icon /> : null}
                          {link.label}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            }
          </ul>
        </div>
      }
    </>
  );
}
