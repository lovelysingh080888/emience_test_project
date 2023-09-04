import React, { useEffect, useState } from "react";
import { getProductService } from "../../services/product";
import { Accordion, Container, Table } from "react-bootstrap";

export const Product = () => {
  const [products, setProducts] = useState({});

  const getProducts = async () => {
    const result = await getProductService();
    console.log(result);
    if (result.status) setProducts(result.data);
  };
  useEffect(() => {
    getProducts();
  }, [0]);

  return (
    <Container style={{paddingRight:80, paddingLeft:80}}>
      <br />
      <h3>Products</h3>
      <br />
      {Object.keys(products).map((category, key) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={key}>
            <Accordion.Header>
              {category.replace("-", " ").toUpperCase()}
            </Accordion.Header>
            <Accordion.Body>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products[category].map((item) => (
                    <tr>
                      <td>
                        <img
                          src={item.thumbnail}
                          style={{ height: 120, width: 120, objectFit:"contain" }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </Container>
  );
};
