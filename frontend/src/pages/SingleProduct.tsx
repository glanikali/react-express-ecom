import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { baseURL } from "../lib/baseUrl";
import Container from "../components/UI/Container";
import Card from "../components/UI/Card";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, error } = useSWR(baseURL + `/product/${id}`);
  console.log(data);
  console.log(id);
  return (
    <Container>
      <Card className="mx-auto w-full lg:w-[80ch]">
        <p>{data?.name}</p>
      </Card>
    </Container>
  );
};

export default SingleProduct;
