import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactAdaptor=createEntityAdapter(); 
const initialState= contactAdaptor.getInitialState()

export const contactSelectors= contactAdaptor.getSelectors((state)=>state.contacts)

const contactSlice= createSlice({
  name:"contacts",
  initialState,
  reducers:{
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    removeAllContacts: contactAdaptor.removeAll,
    updateContact: contactAdaptor.updateOne,

  }
})

export const {addContact,addContacts,deleteContact,removeAllContacts,updateContact} = contactSlice.actions;
export default contactSlice.reducer;