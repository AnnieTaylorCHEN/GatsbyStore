import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const ProductTemplate = ({ data : { contentfulProduct } }) => (
    <Layout>
    <div
    style={{
        margin: '0 auto',
        width: '100%',
        textAlign: 'center'

    }}>
        {/* Prpduct info */}
        <h2>{contentfulProduct.name}</h2>
        <p>{contentfulProduct.description}</p>
        <Img fluid={contentfulProduct.image.fluid} />
        <p>$ {contentfulProduct.price}</p>
    </div>
    </Layout>
)

export const query = graphql`
    query ($slug: String!) {
        contentfulProduct (slug: { eq: $slug}){
            name
            price
            description
            image {
                fluid(maxWidth: 800) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

export default ProductTemplate