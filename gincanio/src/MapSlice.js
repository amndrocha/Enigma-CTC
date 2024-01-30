import { createSlice } from "@reduxjs/toolkit"

export const mapSlice = createSlice({
        name: 'map',
        initialState: {
            modalClass: "none",
            found: false,
            pass: "",
            input: "",
            countries: [
                {
                    name: 'brasil',
                    pass: 'brasil',
                    class: "unselected-point",
                },                
                {
                    name: 'argentina',
                    pass: 'argentina',
                    class: "unselected-point",
                },                
                {
                    name: 'polonia',
                    pass: 'polonia',
                    class: "unselected-point",
                },
            ]
        },
        reducers: {
            handleModal: (state, action) => {
                if (state.modalClass == "modal") {
                    state.modalClass = "none";
                    state.found = false;
                    state.pass = "";
                } else {
                    state.modalClass = "modal";
                    state.pass = action.payload;
                }
            },
            setInput: (state, action) => {
                state.input = action.payload;
            },
            checkPass: (state, action) => {
                let pass = state.pass;
                let input = state.input;
                console.log("pass: ",pass);
                console.log("input: ",input);
                if (pass == input) {
                    state.countries.map((country) => {
                        if (country.name == pass) {
                            country.class = "selected-point";
                        }
                    })
                }
                state.input = "";
            },
            handleFound (state) {
                state.found = true;
            }
        }

    }
);

export const { handleModal, setInput, checkPass, handleFound } =  mapSlice.actions;
export default mapSlice.reducer
