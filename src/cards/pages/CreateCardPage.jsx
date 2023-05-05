import { Container } from "@mui/material";
import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../components/CardForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import normalizeCard from "../helpers/normalization/normalizeCard";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";

export default function CreateCardPage() {

  //handleUpdateCard & handleGetCard & card - useCards
  const {handleCreateCard,value: { card },} = useCards();
  
  //user - useUser (provider)
  const { user } = useUser();
  //useForm (initialForm,schema,onSubmit)
  const { value, ...rest } = useForm(initialCardForm, cardSchema,() => {
    handleCreateCard( {
      ...normalizeCard({ ...value.data }),
      likes: [],
      user_id: user.id,
    });
  });
  //useEffect - update the form data to this card data
  useEffect(() => {

    
  }, []);


  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="edit card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
}
