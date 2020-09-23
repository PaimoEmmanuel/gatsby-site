import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head"


const AboutPage = () => {
    return ( 
        <div>
            <Layout >
            <Head title="About"/>
            <h1>Paimo omo Emmanuel</h1>
            <p>Know more <Link to="/contact">about me</Link></p>
            </Layout>
        </div>
     );
}
 
export default AboutPage;