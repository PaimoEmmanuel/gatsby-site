import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = () => {
    const title = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">{title.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ol className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ol>
            </nav>
        </header>
    );
}

export default Header;