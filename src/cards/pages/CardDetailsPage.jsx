import { CardMedia, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import {Map, GoogleApiWrapper } from "google-maps-react";


export default function CardDetailsPage() {
  const { id } = useParams();
  const {value,handleGetCard}= useCards();
  const {card} = value;

  useEffect(()=>{

  handleGetCard(id);


  },[])

  console.log(card?.image.url);
  return (
    <Container >
      <PageHeader
        title="Business details"
        subtitle="Here you can find all the details about specific business"
      />
      <Container sx={{width:"fit-content"}}>
        <Typography>Business name :{card?.title} {card?.subtitle}</Typography>
        <Typography>Website :{card?.web}</Typography>
        <Typography>Business email :{card?.email}</Typography>
        <Typography>Business phone number :{card?.phone}</Typography>
        <Typography>Business number :{card?.bizNumber}</Typography>
        <Typography>Business description :{card?.description}</Typography>
        <iframe src={card?.map} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </Container>
  );
}
