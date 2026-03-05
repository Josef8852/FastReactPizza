import { createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";
import type { Position, UserInitState } from "./UserTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPosition = () : Promise<Position> => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const  fetchAddress = async () => {
 
  const positionObj : Position = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };


  const addressObj = await getAddress(position.latitude , position.longitude);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  //Payload
  return { position, address };
}

//Thunks

export const fetchAddressThunk = createAsyncThunk("user/fetchAdress", fetchAddress);


const initialState : UserInitState = {
  username: "",
  status: "idle",
  position: {latitude:0, longitude:0},
  address: "",
  error : "" 
}


const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    }
  },
  extraReducers: (builder) => builder.addCase(fetchAddressThunk.pending, (state) => {
    state.status = "loading";
  })
    .addCase(fetchAddressThunk.fulfilled, (state, action) => {
      state.position = action.payload.position;
      state.address = action.payload.address;
      state.status = "idle"
    })
    .addCase(fetchAddressThunk.rejected, (state) => {
      state.status = "error";
      state.error = "There was a problem getting your address. Make sure you fill this field!";
    })
});


export const { updateName } = userSlice.actions;

export default userSlice.reducer;