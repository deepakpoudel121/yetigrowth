'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<ComponentPropsWithoutRef<typeof Link>, "className"> {
  className?: string;
  activeClassName?: string;
  href: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };